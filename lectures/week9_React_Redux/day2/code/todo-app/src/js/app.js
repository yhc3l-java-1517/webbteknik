import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 1;
  } else if (action.type === 'DEC') {
    return state - 1;
  }
  return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INC'
});

window.store = store;
