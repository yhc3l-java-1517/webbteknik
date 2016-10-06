import React from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';
import TodoError from './todo-error';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{ id: 1, text: 'tea' }],
      displayError: true
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(todoText) {
    const newTodoText = todoText.trim();
    if (todoText.length > 0) {
      this.setState({
        todos: this.state.todos.concat([{
          id: +(new Date()),
          text: newTodoText
        }])
      });
    }
  }

  handleRemove(id) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }

  render() {
    return (
      <div className="todo-container">
        <TodoInput onAdd={this.handleAdd} />
        <TodoList todos={this.state.todos} onRemove={this.handleRemove} />
        <TodoError isVisible={this.state.displayError} />
      </div>
    );
  }
}

export default TodoContainer;
