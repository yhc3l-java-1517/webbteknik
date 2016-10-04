import React from 'react';
import axios from 'axios';
import TodoList from './todo-list';


class TodoContainer extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8081/v1/todos').then((response) => {
      if (response.status === 200) {
        this.setState({
          todos: response.data
        });
      }
    });
    this.input.focus();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      todos: nextProps.todos
    });
  }

  onAdd() {
    this.addTodo();
    this.input.focus();
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }

  handleRemove(id) {
    axios.delete(`http://localhost:8081/v1/todos/${id}`).then((response) => {
      if (response.status === 200) {
        this.setState({
          todos: this.state.todos.filter(item => item.id !== id)
        });
      }
    });
  }

  addTodo() {
    if (this.input.value.trim().length > 0) {
      const todoItem = {
        name: this.input.value.trim()
      };

      axios({
        method: 'post',
        url: 'http://localhost:8081/v1/todos',
        data: todoItem
      })
      .then((response) => {
        if (response.status === 201) {
          this.setState({
            todos: this.state.todos.concat([{
              id: response.data.id,
              item: todoItem
            }])
          });
        }
      });
    }
    this.input.value = '';
  }

  render() {
    return (
      <div className="todo-container">
        <input
          type="text"
          ref={(c) => { this.input = c; }}
          onKeyDown={this.handleKeyDown}
          value={this.state.inputValue}
        />
        <button
          type="button"
          id="button"
          className="btn btn-primary"
          onClick={this.onAdd}
        >
          add item
        </button>
        <TodoList
          todos={this.state.todos}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

TodoContainer.propTypes = () => ({
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    text: React.PropTypes.string
  }))
});

export default TodoContainer;
