import axios from 'axios';
import socketIOClient from 'socket.io-client';
import * as types from '../constants/action-types';

const internalAddTodo = todo => ({
  type: types.ADD_TODO,
  data: todo
});
const internalRemoveTodo = todo => ({
  type: types.REMOVE_TODO,
  data: todo
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

export const getAll = () => (dispatch) => {
  dispatch(setLoading());
  return axios.get('http://localhost:8081/v1/todos')
          .then((response) => {
            const todos = response.data.map(item => ({
              id: item.id,
              text: item.item.name
            }));
            dispatch(updateAllTodos(todos));
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not get data from server'));
            dispatch(setLoaded());
          });
};

export const addTodo = todo => (dispatch) => {
  dispatch(setLoading());
  const serverTodo = { name: todo.text };
  return axios.post('http://localhost:8081/v1/todos', serverTodo)
          .then((response) => {
            const localTodo = {
              id: response.data.id,
              text: todo.text
            };
            // dispatch(internalAddTodo(localTodo));
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not add todo to server'));
            dispatch(setLoaded());
          });
};

export const removeTodo = id => (dispatch) => {
  dispatch(setLoading());
  return axios.delete(`http://localhost:8081/v1/todos/${id}`)
          .then(() => {
            // dispatch(internalRemoveTodo(id));
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not delete from server'));
            dispatch(setLoaded());
          });
};


export const startSocket = () => (dispatch) => {
  const socket = socketIOClient('http://localhost:8081');
  socket.on('todo-update', (data) => {
    const todos = data.map(item => ({
      id: item.id,
      text: item.item.name
    }));
    dispatch(updateAllTodos(todos));
  });
};
