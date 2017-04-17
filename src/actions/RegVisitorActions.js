import { SUBMIT_VISITOR } from '../constant/RegVisitor';

import axios from 'axios';

export function RegVisitor(item) {
  item.preventDefault();

  alert('Fair Actions!');

  return dispatch => {
    dispatch({
      type: SUBMIT_VISITOR,
      payload: 'fair actions'
    })
  }
}
