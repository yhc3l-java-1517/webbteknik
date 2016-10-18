import { ADD_PET, REMOVE_PET } from '../constants/action-types';

const reducer = (petsState = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_PET: {
      const newPet = Object.assign({}, action.data);
      newState = [...petsState, newPet];
      return newState;
    }
    case REMOVE_PET: {
      newState = petsState.filter(pet => pet.id !== action.data.id);
      return newState;
    }
    default: {
      return petsState;
    }
  }
};

export default reducer;
