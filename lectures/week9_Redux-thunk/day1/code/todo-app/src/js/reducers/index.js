import { combineReducers } from 'redux';
import todos from './todos';
import error from './error';
import services from './services';

const reducer = combineReducers({
  todos,
  error,
  services
});

export default reducer;
