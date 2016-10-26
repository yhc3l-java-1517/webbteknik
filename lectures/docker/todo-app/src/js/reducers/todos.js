import { ADD_TODO, REMOVE_TODO, UPDATE_ALL_TODOS } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const pet = Object.assign({}, action.data);
      return [...state, pet];
    }
    case REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.data);
    }
    case UPDATE_ALL_TODOS: {
      return [...action.data];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
