import socketIOClient from 'socket.io-client';
import * as types from '../constants/action-types';

let socket;

export const addPosts = posts => ({
  type: types.ADD_POSTS,
  data: posts
});

export const setLastId = id => ({
  type: types.SET_LAST_ID,
  data: id
});

export const setUsername = name => ({
  type: types.SET_USERNAME,
  data: name
});

export const startSocket = () => (dispatch, getState) => {
  socket = socketIOClient(`http://${window.location.hostname}:8080`);
  socket.on('new-posts', (posts) => {
    dispatch(addPosts(posts));
    const lastId = posts.map(post => post.id)
                  .reduce((max, cur) => Math.max(max, cur), 0);
    dispatch(setLastId(lastId));
  });
  socket.on('chat-update', () => {
    const { lastId } = getState();
    socket.emit('send-posts-from', lastId);
  });
};

export const addPost = post => () => {
  socket.emit('add-post', post);
};
