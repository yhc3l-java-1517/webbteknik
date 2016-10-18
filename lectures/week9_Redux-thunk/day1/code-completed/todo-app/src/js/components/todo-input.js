import React from 'react';

const TodoInput = (props) => {
  let todoInput;
  let a = 0;

  function addTodo() {
    a += 1;
    console.log(a);
    props.onAdd(todoInput.value);
    todoInput.value = '';
    todoInput.focus();
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  function handleClick() {
    addTodo();
  }

  return (
    <div className="todo-input-container">
      <input
        autoFocus
        type="text"
        ref={(c) => {
          todoInput = c;
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Add item
      </button>
    </div>
  );
};

export default TodoInput;
