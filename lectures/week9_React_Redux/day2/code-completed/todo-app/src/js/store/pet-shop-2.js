import { createStore } from 'redux';

const initialState = { pets: [], users: [], basketsItems: [], purchases: [] };

export const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PET': {
      const newPet = Object.assign({}, action.data, { id: state.pets.length });
      return Object.assign({}, state, {
        pets: state.pets.concat([newPet])
      });
    }
    case 'REMOVE_PET': {
      return Object.assign({}, state, {
        pets: state.pets.filter(pet => pet.id !== action.id)
      });
    }
    case 'ADD_USER': {
      const newUser = Object.assign({}, action.data, { id: state.users.length });
      return Object.assign({}, state, {
        users: state.users.concat([newUser])
      });
    }
    case 'REMOVE_USER': {
      return Object.assign({}, state, {
        users: state.users.filter(user => user.id !== action.id)
      });
    }
    case 'ADD_TO_BASKET': {
      const basketItem = Object.assign({}, action.data);
      return Object.assign({}, state, {
        basketsItems: state.basketsItems.concat([basketItem])
      });
    }
    case 'REMOVE_FROM_BASKET': {
      const basketItem = Object.assign({}, action.data);
      return Object.assign({}, state, {
        basketsItems: state.basketsItems.concat([basketItem])
      });
    }
    default:
      return state;
  }
});

export const actions = {};
actions.addPet = (animal, name) => ({ type: 'ADD_PET', data: { animal, name } });
actions.removePet = id => ({ type: 'REMOVE_PET', id });
