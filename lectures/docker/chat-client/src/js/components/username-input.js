import React from 'react';

const UsernameInput = (props) => {
  let usernameInput;

  function setUsername() {
    props.onSet(usernameInput.value);
  }

  return (
    <input
      autoFocus
      type="text"
      ref={(c) => {
        usernameInput = c;
      }}
      value={props.username}
      onChange={setUsername}
    />
  );
};

export default UsernameInput;
