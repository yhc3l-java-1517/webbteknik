import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoContainer from './components/todo-container';

const myTodoList = (
  <Provider store={store}>
    <TodoContainer />
  </Provider>
);

ReactDOM.render(myTodoList, document.querySelector('#application'));
