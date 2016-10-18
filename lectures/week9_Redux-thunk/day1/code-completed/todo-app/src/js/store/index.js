import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import { startSocket } from '../actions';

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, createLogger
));
store.dispatch(startSocket());
export default store;
