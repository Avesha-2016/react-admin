import jwt from 'jsonwebtoken';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import setAuthorizationToken from '../another/setAuthToken';

let decode, UserId, Organization, Email, Phone;

export function closeWindow(item) {
  return  {
    type: 'CLOSE_WINDOW',
    payload: Organization
  }
}

export function InputOrganization(item) {
  Organization = item.target.value;

  return  {
    type: 'INPUT_ORGANIZATION',
    payload: Organization
  }
}

export function InputPhone(item) {
  Phone = item.target.value;

  return  {
    type: 'INPUT_PHONE',
    payload: Phone
  }
}

export function InitialDataAccount() {
  setAuthorizationToken(localStorage.getItem('token'));
  decode = jwt.decode(localStorage.getItem('token'), { complete: true });
  UserId = decode.payload.user_id;

  return dispatch => {
    axios({
      url: `http://192.168.0.39:8001/api/v1/accounts/${UserId}`,
      method: 'GET',
    })
    .then(response => {
      dispatch({
        type: 'ACCOUNT_DATA',
        payload: response.data
      })

      Organization = response.data.organizationName;
      Phone        = response.data.phoneNumber.slice(2);
    })
    .catch(reject => console.log(reject))
  }
}

export function ChangeDataAccount(e) {
  e.preventDefault();
  decode = jwt.decode(localStorage.getItem('token'), { complete: true });
  UserId = decode.payload.user_id;

  return dispatch => {
    axios({
      url: `http://192.168.0.39:8001/api/v1/accounts/${UserId}`,
      method: 'PATCH',
      data: {
        organizationName: isEmpty(Organization) ? "Заполните это поле" : Organization,
        phoneNumber: `+7${Phone}`
      }
    })
    .then(response => {
      console.log(response);
      Organization = ''
      dispatch({
        type: 'CHANGE_DATA_ACCOUNT',
        payload: response.data
      })
    })
    .catch(error => {
      Object.assign({},
        dispatch({
          type: 'DATA_ERROR',
          payload: error.response.data
        })
      )

    })
  }
}

export function ChangeData(item) {
  return  {
    type: 'CHANGE_DATA',
    payload: true
  }
}

setInterval(() => {
  let Token = jwt.decode(localStorage.getItem('token'), { complete: true });
  let exp, TokenEmail;

  if (!(isEmpty(Token))) {
    exp = Token.payload.exp * 1000;
    TokenEmail = Token.payload.email;
  }

  axios.get('http://192.168.0.39:8001/portal/time')
  .then(response => {
    let time = response.data.time * 1000;
    let time2 = exp - time;

    if(time2 < 900000) {
      axios({
        url: 'http://192.168.0.39:8001/auth/login',
        method: 'POST',
        data: {
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password')
        }
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log(response);
      })
      .catch(reject => console.log(reject))
    }

  })
  .catch(reject => {
    axios({
      url: 'http://192.168.0.39:8001/auth/login',
      method: 'POST',
      data: {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password')
      }
    })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      console.log(response);
    })
    .catch(reject => console.log(reject))
    })
},50000)
