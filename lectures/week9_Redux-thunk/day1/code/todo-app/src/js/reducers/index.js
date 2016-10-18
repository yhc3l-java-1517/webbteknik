import { combineReducers } from 'redux';
import todos from './todos';
import error from './error';

const reducer = combineReducers({
  todos,
  error
});

export default reducer;
