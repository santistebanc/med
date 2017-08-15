const initial = { loading: false, list: [] }
let newlist = []
let idx = 0;

export default (state = initial, action) => {
  switch (action.type) {
    case 'FETCHING_VIDEOS':
      return { ...state, loading: true }
    case 'READY_VIDEOS':
      return { ...state, loading: false, list: action.payload }
    case 'FETCHING_CREATE_VIDEO':
      return { ...state, loading: true }
    case 'READY_CREATE_VIDEO':
      newlist = [...state.list]
      if (action.pos < newlist.length)
        newlist.splice(action.pos, 0, action.payload)
      else newlist.unshift(action.payload)
      return { ...state, loading: false, list: newlist }
    case 'ERROR_CREATE_VIDEO':
      return { ...state, loading: false }
    case 'FETCHING_DELETE_VIDEO':
      return { ...state, loading: true }
    case 'READY_DELETE_VIDEO':
      newlist = [...state.list]
      idx = newlist.findIndex(v => v._id == action.payload._id)
      if (idx > -1) newlist.splice(idx, 1)
      return { ...state, loading: false, list: newlist }
    case 'ERROR_DELETE_VIDEO':
      return { ...state, loading: false }
    default:
      return state
  }
}