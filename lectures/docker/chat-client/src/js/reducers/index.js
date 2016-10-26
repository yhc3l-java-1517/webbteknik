import { combineReducers } from 'redux';
import posts from './posts';
import lastId from './last-id';
import username from './username';

const reducer = combineReducers({
  posts,
  lastId,
  username
});

export default reducer;
