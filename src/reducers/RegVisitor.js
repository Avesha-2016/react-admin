import { SUBMIT_VISITOR } from '../constant/RegVisitor';



const initialState = {
  success: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SUBMIT_VISITOR:
      return {
          ...state, success: action.payload
      }
    default:
        return state
  }

  return state
}
