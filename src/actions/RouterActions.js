import axios from 'axios';

export function gettingRouters(item) {
  return dispatch => {
    axios.get('http://192.168.0.39:8001/api/v1/routers')
    .then(response => {
      dispatch({
        type: 'GETTING_ROUTERS',
        payload: response.data.results
      })
    })
    .catch(reject => console.log(reject))
  }
}

export function gettingManufacturers(item) {
  return dispatch => {
    axios.get('http://192.168.0.39:8001/api/v1/router-manufacturers')
    .then(response => {
      dispatch({
        type: 'GETTING_MANIFACTURES',
        payload: response.data.results
      })
    })
    .catch(reject => console.log(reject))
  }
}

export function gettingShablon(item) {
  return dispatch => {
    axios.get('http://192.168.0.39:8001/api/v1/templates')
    .then(response => {
      dispatch({
        type: 'GETTING_SHABLON',
        payload: response.data.results
      })
    })
    .catch(reject => console.log(reject))
  }
}

export function gettingModel(item) {
  return dispatch => {
    axios.get('http://192.168.0.39:8001/api/v1/router-models')
    .then(response => {
      dispatch({
        type: 'GETTING_MODEL',
        payload: response.data.results
      })
    })
    .catch(reject => console.log(reject))
  }
}

export function createRouterActions(area, model, software) {
  console.log(area, model, software);

  return dispatch => {
    axios.post('http://192.168.0.39:8001/api/v1/routers', {
      area,
      model,
      software
    })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: 'CREATE_ROUTER',
        payload: response.data.results
      })
    })
    .catch(reject => console.log(reject))
  }
}

export function changeRouterActions(area, model, software) {
  console.log(area, model, software);

  return dispatch => {
    axios({
      url: 'http://192.168.0.39:8001/api/v1/routers/2',
      method: 'PATCH',
      data: {
        area: 'asdasd'
      }
    })
    .then(response => {
      console.log(response.data);
      // dispatch({
      //   type: 'CREATE_ROUTER',
      //   payload: response.data.results
      // })
    })
    .catch(reject => console.log(reject))
  }
}

export function openModalWindow(item) {
  return {
    type: "OPEN_MODAL_WINDOW",
    payload: true
  }
}
