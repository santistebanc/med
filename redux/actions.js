import { request, GraphQLClient } from 'graphql-request'

export const getUsers = () => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_USERS' });
    const query = `{ users {roles, local {email, password, verificationToken, username, verified, passwordResetToken}}}`
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

export const getVideo = (_id) => {
  return async dispatch => {
    dispatch({ type: 'FETCHING_VIDEO' });
    const client = new GraphQLClient('/graphql', {
      credentials: 'include',
      mode: 'cors'
    })
    const query = `query getVideo($_id: ID!) {
    video(_id: $_id) {_id, title, thumbpath, fullpath, posterpath, tags, createdById, dateCreated}
  }`
    try {
      const response = await client.request(query, { _id })
      dispatch({ type: 'READY_VIDEO', payload: response.deleteVideo })
      return response;
    } catch (error) {
      dispatch({ type: 'ERROR_VIDEO', payload: error })
      return error;
    };
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
      const response = await client.request(query, { video: video })
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