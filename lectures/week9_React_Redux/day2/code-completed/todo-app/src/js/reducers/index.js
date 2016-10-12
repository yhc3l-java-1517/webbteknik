import { combineReducers } from 'redux';
import pets from './pets';
import basketItems from './basket-items';
import user from './user';

export default combineReducers({
  pets,
  basketItems,
  user
});
