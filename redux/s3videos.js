const initial = { loading: false, list: [] }

export default (state = initial, action) => {
  switch (action.type) {
    case 'FETCHING_S3VIDEOS':
      return { ...state, loading: true }
    case 'READY_S3VIDEOS':
      return { ...state, loading: false, list: action.payload }
    default:
      return state
  }
}