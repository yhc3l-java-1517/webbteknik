import React from 'react';
import axios from 'axios';
import TodoList from './todo-list';
import TodoInput from './todo-input';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8081/v1/todos').then((response) => {
      if (response.status === 200) {
        this.setState({
          todos: response.data
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      todos: nextProps.todos
    });
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

  handleAdd(todoText) {
    const todoItem = {
      name: todoText
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

  render() {
    return (
      <div className="todo-container">
        <TodoInput
          onAdd={this.handleAdd}
        />
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
