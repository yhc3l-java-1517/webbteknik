import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import TodoInput from './components/todo-input';

const todoArray = [{
  id: 1,
  text: 'fish'
}, {
  id: 2,
  text: 'chips'
}];

const myTodoList = (
  <div className="todo-container">
    <TodoInput />
    <TodoList todos={todoArray} />
  </div>
);

ReactDOM.render(myTodoList, document.querySelector('#application'));
