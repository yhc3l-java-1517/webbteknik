import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import { startSocket } from '../actions';

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware
));
store.dispatch(startSocket());
export default store;
