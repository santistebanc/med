import { request, GraphQLClient } from 'graphql-request'

export const getData = (collection, ) => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_USERS' });
    const query = `{ users {local {email, password, verificationToken}}}`
    const response = await request('/graphql', query)
    dispatch({ type: 'READY_USERS', payload: response.users })
    return response;
  }
}

export const getUsers = () => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_USERS' });
    const query = `{ users {local {email, password, verificationToken}}}`
    const response = await request('/graphql', query)
    dispatch({ type: 'READY_USERS', payload: response.users })
    return response;
  }
}

export const getS3Videos = () => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_S3VIDEOS' });
    const query = `{s3videos{thumbpath, fullpath, posterpath, tags}}`
    const response = await request('/graphql', query)
    dispatch({ type: 'READY_S3VIDEOS', payload: response.s3videos })
    return response;
  }
}

export const getVideos = () => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_VIDEOS' });
    const query = `{videos{_id, title, thumbpath, fullpath, posterpath, tags, createdById, dateCreated}}`
    const response = await request('/graphql', query)
    dispatch({ type: 'READY_VIDEOS', payload: response.videos })
    return response;
  }
}

export const createVideo = (video, pos) => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_CREATE_VIDEO' });
    const client = new GraphQLClient('/graphql', {
      credentials: 'include',
      mode: 'cors'
    })
    const query = `mutation addVideo($video: VideoInput) {
    createVideo(video: $video) {
      _id
      title
      thumbpath
      fullpath
      posterpath
      tags
      createdById
      dateCreated
    }
  }`
    try {
      console.log({ video: video })
      const response = await client.request(query, { video: video })
      console.log(response.createVideo)
      dispatch({ type: 'READY_CREATE_VIDEO', payload: response.createVideo, pos: pos })
      return response;
    } catch (error) {
      dispatch({ type: 'ERROR_CREATE_VIDEO', payload: error })
      return error;
    };
  }
}

export const deleteVideo = (_id) => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_DELETE_VIDEO' });
    const client = new GraphQLClient('/graphql', {
      credentials: 'include',
      mode: 'cors'
    })
    const query = `mutation removeVideo($_id: ID!) {
    deleteVideo(_id: $_id) {
      _id
    }
  }`
    try {
      const response = await client.request(query, { _id })
      dispatch({ type: 'READY_DELETE_VIDEO', payload: response.deleteVideo })
      return response;
    } catch (error) {
      dispatch({ type: 'ERROR_DELETE_VIDEO', payload: error })
      return error;
    };
  }
}