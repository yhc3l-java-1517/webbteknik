import React from 'react';

const UpdateUserForm = (props) => {
  let inputUsername;
  function handleClick() {
    props.onSetUsername(inputUsername.value);
    console.log(`updating username to ${inputUsername.value}`);
  }

  return (
    <div>
      <input
        type="text"
        ref={(c) => { inputUsername = c; }}
      />
      <button
        type="button"
        onClick={handleClick}
      >
      update
      </button>
    </div>
  );
};

export default UpdateUserForm;
