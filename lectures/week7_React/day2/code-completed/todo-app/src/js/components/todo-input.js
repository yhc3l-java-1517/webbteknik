/* eslint "react/no-unused-prop-types": [0] */

import React from 'react';

const TodoInput = (props) => {
  let input;
  function addTodo() {
    const todoText = input.value.trim();
    if (todoText.length > 0) {
      props.onAdd(todoText);
    }
    input.value = '';
    input.focus();
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  function handleClick() {
    addTodo();
  }

  return (<div className="todo-input">
    <input
      autoFocus
      type="text"
      ref={(c) => { input = c; }}
      onKeyDown={handleKeyDown}
    />
    <button
      type="button"
      id="button"
      className="btn btn-primary"
      onClick={handleClick}
    >
      add item
    </button>
  </div>);
};

TodoInput.propTypes = {
  onAdd: React.PropTypes.func
};

export default TodoInput;
