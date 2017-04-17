import isEmpty from 'lodash/isEmpty'

const initialState = {
  Organization: ' ',
  Email: '',
  Phone: '',
  creationDate: '',
  isOpen: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'CLOSE_WINDOW':
      return {
          ...state, isOpen: false
      }
    case 'INPUT_ORGANIZATION':
      return {
          ...state, Organization: action.payload
      }
    case 'INPUT_EMAIL':
      return {
          ...state, Email: action.payload
      }
    case 'INPUT_PHONE':
      return {
          ...state, Phone: action.payload
      }
    case 'CHANGE_DATA':
      return {
          ...state, isOpen: action.payload
      }
    case 'DATA_ERROR':
      return {
          ...state, error: action.payload
      }
    case 'CHANGE_DATA_ACCOUNT':
      return {
          ...state,
          isOpen: false,
          Organization: action.payload.organizationName,
          error: ''
      }
    case 'ACCOUNT_DATA':
      return {
          ...state,
          Email: action.payload.email,
          Organization: isEmpty(action.payload.organizationName) ? '' : action.payload.organizationName,
          Phone: isEmpty(action.payload.phoneNumber) ? '' : action.payload.phoneNumber,
          creationDate: action.payload.creationDate.replace('T', ' ').slice(null,-11)
      }
      default:
          return state
    }

    return state
}
