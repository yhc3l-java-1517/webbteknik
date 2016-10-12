import { createStore } from 'redux';
import * as actions from '../actions';

const ADD_PET = 'ADD_PET';
const REMOVE_PET = 'REMOVE_PET';
const SET_USER = 'SET_USER';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
const CHECKOUT = 'CHECKOUT';

const initialState = {
  pets: [],
  user: { id: 1, name: 'Tom' },
  basket: []
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_PET: {
      const newPet = Object.assign({}, action.data);
      newState.pets = [...state.pets, newPet];
      return newState;
    }
    case REMOVE_PET: {
      newState.pets = state.pets.filter(pet => pet.id !== action.data.id);
      return newState;
    }
    case SET_USER: {
      const user = Object.assign({}, action.data);
      newState.user = user;
      return newState;
    }
    case ADD_TO_BASKET: {
      const pet = Object.assign({}, action.data);
      newState.basket = [...state.basket, pet];
      return newState;
    }
    case REMOVE_FROM_BASKET: {
      newState.basket = state.basket.filter(item => item.id !== action.data.id);
      return newState;
    }
    case CHECKOUT: {
      newState.basket = [];
      return newState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addPet(
  { id: 15, animal: 'fish' }
));

store.dispatch({
  type: SET_USER,
  data: { id: 13, name: 'Fred' }
});

window.store = store;
