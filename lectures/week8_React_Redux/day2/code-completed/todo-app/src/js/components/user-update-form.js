import React from 'react';

const UserUpdateForm = (props) => {
  let inputUsername;
  function handleClick() {
    const user = { id: +(new Date()), username: inputUsername.value };
    props.onSetUser(user);
  }
  return (
    <div>
      <input
        type="text"
        className="form-control"
        ref={(c) => { inputUsername = c; }}
        placeholder={props.username}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Update
      </button>
    </div>
  );
};

export default UserUpdateForm;
