import store from './store';
import * as actions from './actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addPet(
  { id: 15, animal: 'fish' }
));

window.store = store;
