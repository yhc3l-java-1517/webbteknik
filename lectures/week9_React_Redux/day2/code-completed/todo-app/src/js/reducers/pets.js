export default (state = [{ id: 1, name: 'Billy the fish' }], action) => {
  switch (action.type) {
    case 'REMOVE_FROM_BASKET':
    case 'ADD_PET': {
      const newPet = Object.assign({}, action.data, { id: action.data.id || state.length });
      return [...state, newPet];
    }
    case 'ADD_TO_BASKET':
    case 'REMOVE_PET': {
      return state.filter(pet => pet.id !== action.data.id);
    }
    default: {
      return state;
    }
  }
};
