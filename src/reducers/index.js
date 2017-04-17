import { combineReducers } from 'redux';

// reducer
import SearchLocation from './SearchLocation';
import RegVisitor from './RegVisitor';
import LoginForm from './LoginForm';
import AccountReducer from './AccountReducer';
import PlatformReducer from './PlatformReducer';
import RouterReducer from './RouterReducer';

export default combineReducers({
  SearchLocation,
  RegVisitor,
  LoginForm,
  AccountReducer,
  PlatformReducer,
  RouterReducer
})
