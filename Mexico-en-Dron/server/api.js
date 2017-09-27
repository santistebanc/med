const { MongoClient, ObjectId } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const morgan = require('morgan')
const cors = require('cors')
const nodeify = require('nodeify')
const ooth = require('./ooth')
const fetchVideos = require('../aws/fetchVideos.js')
const processVideos = require('../aws/processVideos.js')
const S3config = require('../aws/s3config.js');
const AWS = require('aws-sdk');
const publicSettings = require('../public-settings.js')


const prepare = (o) => {
    if (o && o._id) {
        o._id = o._id.toString()
    }
    return o
}

function nodeifyAsync(asyncFunction) {
    return function (...args) {
        return nodeify(asyncFunction(...args.slice(0, -1)), args[args.length - 1])
    }
}

const start = async (app, settings) => {
    try {

        let aws_aki = process.env.AWS_ACCESS_KEY_ID || settings.accessKeyId
        let aws_sak = process.env.AWS_SECRET_ACCESS_KEY || settings.secretAccessKey
        AWS.config.update({
            accessKeyId: aws_aki,
            secretAccessKey: aws_sak,
            region: 'us-west-1'
        })


        const db = await MongoClient.connect(settings.mongoUrl)

        const Users = db.collection('users')
        const Videos = db.collection('videos')
        const Posts = db.collection('posts')
        const Comments = db.collection('comments')

        const typeDefs = [`
            type Query {
                me: User
                users: [User]
                post(_id: ID!): Post
                posts: [Post]
                comment(_id: ID!): Comment
                s3videos: [s3Video]
                videos: [Video]
                video(_id: ID!): Video
            }
            type s3Video {
                thumbpath: String
                fullpath:String
                posterpath:String
                tags: [String]
            }
            type Video {
                _id: ID!
                title: String
                duration: Float
                thumbpath: String
                fullpath:String
                posterpath:String
                tags: [String]
                dateCreated: String
                createdById: String
            }
            type User {
                _id: ID!
                local: UserLocalData
                roles: [String]
            }
            type UserLocalData {
                email: String
                password: String
                verificationToken: String 
                username: String
                passwordResetToken: String
                verified: Boolean
            }
            type Post {
                _id: ID!
                authorId: ID!
                title: String
                content: String

                author: User
                comments: [Comment]!
            }
            type Comment {
                _id: ID!
                postId: ID!
                authorId: ID
                content: String

                author: User
                post: Post
            }
            input VideoInput {
                title: String
                duration: Float
                thumbpath: String
                fullpath:String
                posterpath:String
                tags: [String]
                dateCreated: String
                createdById: String
            }
            type Mutation {
                createVideo(video: VideoInput): Video
                updateVideo(_id: ID!, video: VideoInput): Video
                deleteVideo(_id: ID!): Video
                createPost(title: String, content: String): Post
                createComment(postId: ID!, content: String): Comment
            }
            schema {
                query: Query
                mutation: Mutation
            }
        `];

        const resolvers = {
            Query: {
                me: async (root, args, { userId }) => {
                    if (!userId) {
                        return null
                    }
                    return {
                        _id: userId
                    }
                },
                post: async (root, { _id }) => {
                    return prepare(await Posts.findOne(ObjectId(_id)))
                },
                posts: async (root, args, context) => {
                    return (await Posts.find({}).toArray()).map(prepare)
                },
                comment: async (root, { _id }) => {
                    return prepare(await Comments.findOne(ObjectId(_id)))
                },
                users: async (root, args, context) => {
                    return (await Users.find({}).toArray()).map(prepare)
                },
                video: async (root, { _id }) => {
                    return prepare(await Videos.findOne(ObjectId(_id)))
                },
                videos: async (root, args, context) => {
                    return (await Videos.find({}).toArray()).map(prepare)
                },
                s3videos: async (root, args, context) => {
                    const rawvideos = await fetchVideos()
                    return await processVideos(rawvideos)
                },
            },
            Post: {
                comments: async ({ _id }) => {
                    return (await Comments.find({ postId: _id }).toArray()).map(prepare)
                }
            },
            Comment: {
                post: async ({ postId }) => {
                    return prepare(await Posts.findOne(ObjectId(postId)))
                }
            },
            Mutation: {
                createVideo: async (root, { video }, { userId }) => {
                    if (!userId) {
                        throw new Error('User not logged in.')
                    }
                    const exists = await Videos.findOne({ thumbpath: video.thumbpath })
                    if (exists) {
                        throw new Error('Video already exists')
                    }
                    video.createdById = userId
                    video.dateCreated = Date.now().toString()
                    const _id = (await Videos.insertOne(video)).insertedId
                    return prepare(await Videos.findOne(ObjectId(_id)))
                },
                deleteVideo: async (root, { _id }, { userId }) => {
                    if (!userId) {
                        throw new Error('User not logged in.')
                    }
                    const exists = await Videos.findOne(ObjectId(_id))
                    if (!exists) {
                        throw new Error('Video to remove does not exist')
                    }
                    const deleted = await Videos.deleteOne({ _id: ObjectId(_id) })
                    if (deleted.deletedCount == 1) {
                        return prepare(exists)
                    } else {
                        throw new Error('Video could not be removed')
                    }
                },
                updateVideo: async (root, { _id, video }, { userId }) => {
                    if (!userId) {
                        throw new Error('User not logged in.')
                    }
                    const exists = await Videos.findOne(ObjectId(_id))
                    if (!exists) {
                        throw new Error('Video to update does not exist')
                    }
                    const replaced = (await Videos.replaceOne({ _id: ObjectId(_id) }, video))
                    if (replaced.modifiedCount == 1) {
                        video._id = _id;
                        return prepare(video)
                    } else {
                        throw new Error('Video could not be updated')
                    }
                },
                createPost: async (root, args, { userId }, info) => {
                    if (!userId) {
                        throw new Error('User not logged in.')
                    }
                    args.authorId = userId
                    const _id = (await Posts.insertOne(args)).insertedId
                    return prepare(await Posts.findOne(ObjectId(_id)))
                },
                createComment: async (root, args, { userId }) => {
                    if (!userId) {
                        throw new Error('User not logged in.')
                    }
                    args.authorId = userId
                    const _id = (await Comments.insertOne(args)).insertedId
                    return prepare(await Comments.findOne(ObjectId(_id)))
                },
            },
        }

        const schema = makeExecutableSchema({
            typeDefs,
            resolvers
        })

        app.use(morgan('dev'))

        const corsMiddleware = cors({
            origin: settings.originUrl,
            credentials: true,
            preflightContinue: false
        })
        app.use(corsMiddleware)
        app.options(corsMiddleware)

        app.use(session({
            name: 'api-session-id',
            secret: settings.sessionSecret,
            resave: false,
            saveUninitialized: true,
        }))
        
        await ooth(app, settings)

        app.use('/graphql', bodyParser.json(), graphqlExpress((req, res) => {
            return {
                schema,
                context: { userId: req.user && req.user._id }
            }
        }))

        app.use('/graphiql', graphiqlExpress({
            endpointURL: '/graphql',
        }))

    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    start
}