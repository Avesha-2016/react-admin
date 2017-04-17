import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

let namePlatform;
let addressPlatform;
let activiti = Boolean();

export function closePlatform(item) {
  return  {
    type: 'CLOSE_PLATFORM',
    payload: false
  }
}

export function OpenPlatform(item) {
  return  {
    type: 'OPEN_PLATFORM',
    payload: true
  }
}

export function InputNamePlatform(item) {
  namePlatform = item.target.value;

  return  {
    type: 'NAME_PLATFORM',
    payload: namePlatform
  }
}

export function addressChangePlatform(item) {
  addressPlatform = item.target.value;

  return  {
    type: 'ADDRESS_PLATFORM',
    payload: addressPlatform
  }
}

export function InitialDataPlatform() {

  return dispatch => {
    axios({
      url: `http://192.168.0.39:8001/api/v1/areas`,
      method: 'GET',
    })
    .then(response => {
      dispatch({
        type: 'PLATFORM_PRESENT',
        payload: response.data.results
      })

    })
    .catch(reject => console.log(reject))
  }

}

export function createPlatform(e) {
  e.preventDefault();

  return dispatch => {
    axios({
      url: `http://192.168.0.39:8001/api/v1/areas`,
      method: 'POST',
      data: {
        name: `${namePlatform}`
      }
    })
    .then(response => {
      dispatch({
        type: 'CREATE_PLATFORM',
        payload: response.data.results
      })

      namePlatform = '';
      axios({
        url: `http://192.168.0.39:8001/api/v1/areas`,
        method: 'GET',
      })
      .then(response => {
        dispatch({
          type: 'PLATFORM_PRESENT',
          payload: response.data.results
        })

      })
      .catch(reject => console.log(reject))
    })
    .catch(reject => console.log(reject))
  }
}

export function deletePlatform(item) {
  const platformId = item.id

  return dispatch => {
    axios({
      url: `http://192.168.0.39:8001/api/v1/areas/${platformId}`,
      method: 'DELETE',
    })
    .then(response => {
      dispatch({
        type: 'DELETE_PLATFORM',
        payload: response.data.results
      })

      axios({
        url: `http://192.168.0.39:8001/api/v1/areas`,
        method: 'GET',
      })
      .then(response => {
        dispatch({
          type: 'PLATFORM_PRESENT',
          payload: response.data.results
        })

      })

      .catch(reject => console.log(reject))
    })

    .catch(reject => console.log(reject))
  }
}

export function changePlatform(item) {
  const platformId = item.id
  console.log(item);

  return dispatch => {
    axios({
      url: `http://192.168.0.39:8001/api/v1/areas/${platformId}`,
      method: 'PATCH',
      data: {
        name:    isEmpty(namePlatform)    ? item.name    : namePlatform,
        address: isEmpty(addressPlatform) ? item.address : addressPlatform,
        active:  item.active
      }
    })
    .then(response => {

      dispatch({
        type: 'CHANGE_PLATFORM',
        payload: response.data
      })
      namePlatform = '';
    })

    .catch(reject => console.log(reject))
  }
}

export function disablePlatform(item) {
  const platformId = item.id


  return dispatch => {
    axios({
      url: `http://192.168.0.39:8001/api/v1/areas/${platformId}`,
      method: 'PATCH',
      data: {
        name:    isEmpty(namePlatform)    ? item.name    : namePlatform,
        address: isEmpty(addressPlatform) ? item.address : addressPlatform,
        active:  !item.active
      }
    })
    .then(response => {

      dispatch({
        type: 'CHANGE_PLATFORM',
        payload: response.data
      })
    })

    .catch(reject => console.log(reject))
  }
}
