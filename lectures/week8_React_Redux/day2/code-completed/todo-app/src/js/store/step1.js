import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 1;
  }
  return state;
};

const store = createStore(reducer, 0);

store.subsrcibe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({ type: 'INC' });
