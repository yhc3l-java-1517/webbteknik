// 1) Create a stateless component to display "an error has occiured"
// 2) Make the stateless component be hidden if the prop isHidden is true and display if false
// 3) Add button to dismiss error message and update the state of todocontainer
import React from 'react';

const TodoError = (props) => {
  if (props.isVisible) {
    return (
      <div className="todo-error">
        an error has occured
        <button type="button" onClick={props.onHideError}> hide </button>
      </div>
    );
  }
  return null;
};

export default TodoError;
