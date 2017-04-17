const initialState = {
  routers: [],
  modalWindow: false,
  preloader: true,
  manifactures: [],
  shablon: [],
  model: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'GETTING_ROUTERS':
      return {
          ...state,
          routers: action.payload,
          preloader: false
      }
    case 'GETTING_MANIFACTURES':
      return {
          ...state,
          manifactures: action.payload
      }
    case 'GETTING_SHABLON':
      return {
          ...state,
          shablon: action.payload
      }
    case 'GETTING_MODEL':
      return {
          ...state,
          model: action.payload
      }
    case 'OPEN_MODAL_WINDOW':
      return {
          ...state, modalWindow: true
      }
    case 'CLOSE_MODAL_WINDOW':
      return {
          ...state, modalWindow: false
      }
    default:
        return state
  }

  return state
}
