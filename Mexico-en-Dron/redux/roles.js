const initial = { loading: false, list: [] }

export default (state = initial, action) => {
  switch (action.type) {
    case 'FETCHING_ROLES':
      return { ...state, loading: true }
    case 'READY_ROLES':
      return { ...state, loading: false, list: action.payload }
    default:
      return state
  }
}