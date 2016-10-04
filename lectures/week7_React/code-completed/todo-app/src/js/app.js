import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/todo-container';

const todoContainer = React.createElement(TodoContainer);

ReactDOM.render(todoContainer, document.querySelector('#react-application'));
