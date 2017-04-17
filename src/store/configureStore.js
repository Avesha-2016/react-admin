import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import Thunk from 'redux-thunk';

export default function configureStore(initialState) {

  const store = createStore(combineReducers, initialState, applyMiddleware(Thunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
       const nextRootReducer = require('../reducers/index');
       store.replaceReducer(nextRootReducer);
    });
  }

  return store
}
