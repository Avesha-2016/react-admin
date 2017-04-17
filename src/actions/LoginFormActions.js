import axios from 'axios';
// import Validator from '../another/Validator';

let name;
let password;
let passwordConfirm;

export function InputName(item) {
  name = item.target.value;

  return  {
    type: 'INPUT_NAME',
    payload: name
  }
}


export function InputPassword(item) {
  password = item.target.value;

  return  {
    type: 'INPUT_PASSWORD',
    payload: password
  }
}

export function InputPasswordConfirm(item) {
  passwordConfirm = item.target.value;

  return  {
    type: 'INPUT_PASSWORD_CONFIRM',
    payload: passwordConfirm
  }
}

export function Authorizations(item) {
  item.preventDefault();
  localStorage.setItem('password', password);
  localStorage.setItem('email', name);

  return dispatch => {
    dispatch({
      type: 'PRELOADER',
      payload: true
    })

    axios({
      url: 'http://192.168.0.39:8001/auth/login',
      method: 'POST',
      data: {
        email: name,
        password
      }
    })
    .then(response => {
      dispatch({
        type: 'AUTHORIZATIONS',
        payload: response.data.token
      })

      name = '';
      password = '';
    })
    .catch(error => {
      Object.assign({},
        dispatch({
          type: 'LOGIN_ERROR',
          payload: error.response.data
        })
      )

    })

  }
}

export function Registration(item) {
  item.preventDefault();

  if(password !== passwordConfirm) {
    let error = {
      confirm: 'Пароли не совпадают!'
    }

    return {
      type: 'LOGIN_ERROR_REG',
      payload: error
    }
  }

  return dispatch => {
    dispatch({
      type: 'PRELOADER',
      payload: true
    })

    axios.post('http://192.168.0.39:8001/api/v1/accounts', {
      email: name,
      password
    })
    .then(response => {
      dispatch({
        type: 'REGISTRATIONS',
        payload: response.data
      })

      name = '',
      password = '';
    })
    .catch(error => {
      Object.assign({},
        dispatch({
          type: 'LOGIN_ERROR_REG',
          payload: error.response.data
        })
      )

    })

  }
}
