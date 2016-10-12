import { createStore, combineReducers } from 'redux';

const addTodo = text => ({ type: 'ADD_TODO', data: { text } });
const showError = text => ({ type: 'SHOW_ERROR' });
const hideError = text => ({ type: 'HIDE_ERROR' });
const showError = (showErrorState = false, action) => {
  switch (action.type) {
    case 'SHOW_ERROR': {
      return true;
    },
    case 'HIDE_ERROR': {
      return false
    }
    default:
      return todosState;
  }
};


/* Step 2 */
const todos = (todosState = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = Object.assign({}, action.data, { id: +(new Date()) });
      return todosState.concat([newTodo]);
    }
    default:
      return todosState;
  }
};

/*
const store = createStore((state = initialState, action) => ({
  todos: todos(state.todos, action)
}));
*/

/* Step 3 */
const store = createStore(combineReducers({
  todos
  showError
}));

/* Step 1
const initialState = { todos: [] };
const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = Object.assign({}, action.data, { id: +(new Date()) });
      return Object.assign({}, state, { cards: state.cards.concat([newTodo]) });
    }
    default:
      return state;
  }
});
*/
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_TODO',
  data: {
    text: 'fish'
  }
});

export default store;
