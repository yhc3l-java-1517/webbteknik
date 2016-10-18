// 1) Create a stateless component to display "an error has occiured"
// 2) Make the stateless component be hidden if the prop isHidden is true and display if false
// 3) Add button to dismiss error message and update the state of todocontainer
import React from 'react';

const TodoError = (props) => {
  if (props.isVisible) {
    return (
      <div className="alert alert-danger" role="alert">
        an error has occured
        <button
          type="button"
          className="badge btn btn-danger pull-right"
          onClick={props.onHideError}
        >
        hide
        </button>
      </div>
    );
  }
  return null;
};

TodoError.propTypes = () => ({
  isVisible: React.PropTypes.bool,
  onHideError: React.PropTypes.func.isRequired
});

export default TodoError;
