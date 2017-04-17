const initialState = {
  locations: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'NEW_ACTIONS':

      return {
          ...state, locations: action.payload
      }
    default:
        return state
  }

  return state
}
