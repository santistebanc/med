const initial = { loading: false, list: [] }

export default (state = initial, action) => {
  switch (action.type) {
    case 'FETCHING_USERS':
      return { ...state, loading: true }
    case 'READY_USERS':
      return { ...state, loading: false, list: action.payload }
    default:
      return state
  }
}