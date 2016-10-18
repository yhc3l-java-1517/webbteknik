import axios from 'axios';
import socketIOClient from 'socket.io-client';
import * as types from '../constants/action-types';
import { TODOS_URL } from '../constants/service';

const internalAddTodo = todo => ({
  type: types.ADD_TODO,
  data: todo
});
const internalRemoveTodo = id => ({
  type: types.REMOVE_TODO,
  data: id
});
export const updateAllTodos = todos => ({
  type: types.UPDATE_ALL_TODOS,
  data: todos
});
export const setError = message => ({
  type: types.SET_ERROR,
  data: message
});
export const clearError = () => ({
  type: types.CLEAR_ERROR
});
export const setLoading = () => ({
  type: types.SET_LOADING
});
export const setLoaded = () => ({
  type: types.SET_LOADED
});
export const setSocketActive = () => ({
  type: types.SET_SOCKET_ACTIVE
});
export const setSocketInActive = () => ({
  type: types.SET_SOCKET_INACTIVE
});

export const addTodo = todo => (dispatch) => {
  if (todo.text.trim().length > 0) {
    dispatch(setLoading());
    const serverTodo = { name: todo.text };
    return axios.post(`${TODOS_URL}/v1/todos`, serverTodo)
      .then((response) => {
      //  const localTodo = {
      //    id: response.data.id,
      //    text: todo.text
      //  };
      //  dispatch(internalAddTodo(localTodo));
        dispatch(setLoaded);
        dispatch(clearError());
      })
    .catch(() => {
      dispatch(setError('Couldn\'t add data from server'));
    });
  }
};

export const removeTodo = id => (dispatch) => {
  dispatch(setLoading());
  return axios.delete(`${TODOS_URL}/v1/todos/${id}`)
      .then(() => {
      //  dispatch(internalRemoveTodo(id));
        dispatch(setLoaded);
        dispatch(clearError());
      })
    .catch(() => {
      dispatch(setError('Couldn\'t remove data from server'));
    });
};

export const getAll = () => (dispatch) => {
  dispatch(setLoading());
  return axios.get(`${TODOS_URL}/v1/todos`)
      .then((response) => {
        const todos = response.data.map(item => ({
          id: item.id,
          text: item.item.name
        })
        );
        dispatch(updateAllTodos(todos));
        dispatch(setLoaded);
        dispatch(clearError());
      })
    .catch(() => {
      dispatch(setError('Couldn\'t receive data from server'));
    });
};

export const startSocket = () => (dispatch) => {
  const socket = socketIOClient(TODOS_URL);
  socket.on('connect', () => {
    dispatch(setSocketActive);
  });
  socket.on('todo-update', (data) => {
    const todos = data.map(item => ({
      id: item.id,
      text: item.item.name
    })
    );
    dispatch(updateAllTodos(todos));
  });
  socket.on('disconnect', () => {
    dispatch(setSocketInActive());
  });
};
