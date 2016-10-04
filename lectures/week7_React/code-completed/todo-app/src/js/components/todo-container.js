import React from 'react';
import TodoList from './todo-list';
import testData from '../test-data';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.state = {
      todos: testData
    };
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      const input = event.target;
      this.setState({
        todos: this.state.todos.concat([{
          id: +(new Date()),
          text: input.value
        }])
      });
      input.value = '';
    }
  }

  onRemove(id) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }

  render() {
    return (
      <div className="todo-container">
        <input type="text" placeholder="Add todo" onKeyDown={this.onKeyDown} />
        <TodoList todos={this.state.todos} onRemove={this.onRemove} />
      </div>
    );
  }
}

export default TodoContainer;
