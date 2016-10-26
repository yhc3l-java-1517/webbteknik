import React from 'react';

const Post = props => (
    <li
      className="list-group-item"
    >
    {props.username}:                      {props.text}
    </li>
  );
Post.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  username: React.PropTypes.string.isRequired,
  text: React.PropTypes.string
});

const PostList = props => (<ul className="list-group">{
    props.posts.map(post => (
      <Post
        key={post.id}
        username={post.username}
        text={post.text}
      />
  )).reverse()
}</ul>);
PostList.propTypes = () => ({
  posts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      username: React.PropTypes.string.isRequired,
      text: React.PropTypes.string
    })
  ),
  onRemove: React.PropTypes.func
});

export default PostList;
