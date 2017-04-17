const initialState = {
  name: ' ',
  password: '',
  passwordConfirm: '',
  token: '',
  data: '',
  errors: '',
  errorsReg: '',
  preloader: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'PRELOADER':
      return {
          ...state, preloader: true
      }
    case 'INPUT_NAME':
      return {
          ...state, name: action.payload
      }
    case 'INPUT_PASSWORD':
      return {
          ...state, password: action.payload
      }
    case 'INPUT_PASSWORD_CONFIRM':
      return {
          ...state, passwordConfirm: action.payload
      }
    case 'AUTHORIZATIONS':
      return {
          ...state,
          name: ' ',
          password: '',
          token: action.payload,
          preloader: false
      }
    case 'REGISTRATIONS':
      return {
          ...state,
          name: ' ',
          password: '',
          passwordConfirm: '',
          data: action.payload,
          errors: '',
          errorsReg: '',
          preloader: false
      }
    case 'LOGIN_ERROR':
      return {
          ...state,
          error: action.payload,
          preloader: false
      }
    case 'LOGIN_ERROR_REG':
      return {
          ...state,
          errorsReg: action.payload,
          preloader: false
      }
    default:
        return state
  }

  return state
}
