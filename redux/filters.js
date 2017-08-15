const initial = {
  durationFilter: { min: 0, max: 180 },
  priceFilter: { min: 0, max: 100 },
}

export default (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE_DURATION_FILTER':
      return { ...state, durationFilter: { ...action.payload } }
    case 'CHANGE_PRICE_FILTER':
      return { ...state, priceFilter: { ...action.payload } }
    default:
      return state
  }
}