import React from 'react';
import { connect } from 'react-redux';
import { addPost, setUsername } from '../actions';
import UsernameInput from './username-input';
import ChatInput from './chat-input';
import PostList from './post-list';

const ChatContainer = props => (
  <div className="todo-container">
    <UsernameInput onSet={props.handleSetUsername} username={props.username} />
    <ChatInput onAdd={props.handleAdd} username={props.username} />
    <PostList posts={props.posts} />
  </div>
 );

ChatContainer.propTypes = () => ({
  posts: React.PropTypes.array,
  username: React.PropTypes.string,
  handleAdd: React.PropTypes.func.isRequired
});

const mapStateToProps = state => ({
  posts: state.posts,
  username: state.username
});

const mapDispatchToProps = dispatch => ({
  handleAdd: (post) => {
    dispatch(addPost(post));
  },
  handleSetUsername: (name) => {
    dispatch(setUsername(name));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
