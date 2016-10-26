import React from 'react';

const ChatInput = (props) => {
  let todoInput;

  function addTodo() {
    props.onAdd({ text: todoInput.value, username: props.username });
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
    <div className="chat-input-container">
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

export default ChatInput;
