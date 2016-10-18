import * as types from '../constants/action-types';

export const addTodo = todo => ({
  type: types.ADD_TODO,
  data: todo
});
export const removeTodo = todo => ({
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
