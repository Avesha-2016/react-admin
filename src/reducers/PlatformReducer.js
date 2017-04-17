import _ from 'lodash';

const initialState = {
  namePlatform: '',
  platform: [],
  addressPlatform: '',
  isOpen: false,
  preloader: true
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'OPEN_PLATFORM':
      return {
          ...state, isOpen: true
      }
    case 'CLOSE_PLATFORM':
      return {
          ...state, isOpen: false
      }
    case 'ADDRESS_PLATFORM':
      return {
          ...state, addressPlatform: action.payload
      }
    case 'NAME_PLATFORM':
      return {
          ...state, namePlatform: action.payload,
      }
    case 'PLATFORM_PRESENT':
      return {
          ...state,
          platform: action.payload,
          preloader: false
      }
    case 'CREATE_PLATFORM':
      return {
          ...state,
          isOpen: false,
          namePlatform: ''
      }
    case 'CHANGE_PLATFORM':
      let Change = state.platform.filter(item => {
        if(item.id !== action.payload.id) {
            return item
          }
        })
      Change.unshift(action.payload)

      return {
          ...state, platform: Change

      }
    case 'DELETE_PLATFORM':
      return {
          ...state
      }
      default:
          return state
    }

    return state
}
