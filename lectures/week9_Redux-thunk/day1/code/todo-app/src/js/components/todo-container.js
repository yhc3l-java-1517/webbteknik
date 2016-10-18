import React from 'react';
import axios from 'axios';
import TodoInput from './todo-input';
import TodoList from './todo-list';
import TodoError from './todo-error';


class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{ id: 1, text: 'tea' }],
      displayError: false,
      errorText: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleHideError = this.handleHideError.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8081/v1/todos')
      .then((response) => {
        if ((response.status === 200) || (response.status === 304)) {
          this.setState({
            todos: response.data.map(item => ({
              id: item.id,
              text: item.item.name
            })),
            displayError: false
          });
        }
      })
      .catch(() => {
        this.setState({
          displayError: true,
          errorText: 'Couldn\'t receive data from server'
        });
      });
  }

  handleAdd(todoText) {
    const newTodoText = todoText.trim();
    if (newTodoText.length > 0) {
      axios.post('http://localhost:8081/v1/todos',
        { name: newTodoText })
      .then((response) => {
        if (response.status === 201) {
          this.setState({
            todos: this.state.todos.concat([{
              id: response.data.id,
              text: newTodoText
            }]),
            displayError: false
          });
        }
      })
      .catch(() => {
        this.setState({
          displayError: true,
          errorText: 'Couldn\'t send data to server'
        });
      });
    }
  }

  handleRemove(id) {
    axios.delete(`http://localhost:8081/v1/todos/${id}`)
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          todos: this.state.todos.filter(item => item.id !== id),
          displayError: false
        });
      }
    })
    .catch(() => {
      this.setState({
        displayError: true,
        errorText: 'Couldn\'t delete data from server'
      });
    });
  }

  handleHideError() {
    this.setState({
      displayError: false
    });
  }

  render() {
    return (
      <div className="todo-container">
        <TodoInput onAdd={this.handleAdd} />
        <TodoList todos={this.state.todos} onRemove={this.handleRemove} />
        <TodoError
          isVisible={this.state.displayError}
          errorText={this.state.errorText}
          onHideError={this.handleHideError}
        />
      </div>
    );
  }
}

export default TodoContainer;
