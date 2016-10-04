import React from 'react';
import ReactDOM from 'react-dom';
import socketClient from 'socket.io-client';
import TodoContainer from './components/todo-container';

function run(data) {
  const todoContainer = React.createElement(TodoContainer, {
    todos: Array.isArray(data) ? data : []
  });
  ReactDOM.render(todoContainer, document.querySelector('#application'));
}
run();

const socket = socketClient('http://localhost:8081');

socket.on('todo-update', (data) => {
  console.log('update');
  run(data);
});
