import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/todo-container';

const myTodoList = (
  <div>
    <TodoContainer />
  </div>
);

ReactDOM.render(myTodoList, document.querySelector('#application'));
