import { combineReducers } from 'redux';
import basket from './basket';
import pets from './pets';
import user from './user';

/*
const reducer = (state, action) => ({
  basket: basket(state.basket, action),
  user: user(state.user, action),
  pets: pets(state.pets, action)
});
*/

const reducer = combineReducers({
  basket,
  pets,
  user
});

export default reducer;
