import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, clearError } from '../actions';
import TodoInput from './todo-input';
import TodoList from './todo-list';
import TodoError from './todo-error';

const TodoContainer = props => (
   <div className="todo-container">
     <TodoInput onAdd={props.handleAdd} />
     <TodoList todos={props.todos} onRemove={props.handleRemove} />
     <TodoError
       isVisible={props.displayError}
       errorText={props.errorText}
       onHideError={props.handleHideError}
     />
   </div>
 );

const mapStateToProps = state => ({
  todos: state.todos,
  displayError: state.error.hasError,
  errorText: state.error.errorMessage
});

const mapDispatchToProps = dispatch => ({
  handleAdd: (text) => {
    const todo = { id: +(new Date()), text };
    dispatch(addTodo(todo));
  },
  handleRemove: (id) => {
    dispatch(removeTodo(id));
  },
  handleHideError: () => {
    dispatch(clearError());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
