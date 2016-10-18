import React from 'react';
import { connect } from 'react-redux';
import UpdateUserForm from './update-user-form';
import Welcome from './welcome';
import { setUser } from '../actions';

const ShopContainer = props => (
  <div>
    <Welcome username={props.username} />
    <UpdateUserForm onSetUsername={props.onSetUsername} />
  </div>
);

const mapStateToProps = state => ({
  username: state.user.username
});

const mapDispatchToProps = dispatch => ({
  onSetUsername: (name) => {
    const newUser = { id: 3, username: name };
    dispatch(setUser(newUser));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
