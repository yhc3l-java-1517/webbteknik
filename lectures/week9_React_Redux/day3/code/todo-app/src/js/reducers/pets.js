import { ADD_PET, REMOVE_PET } from '../constants/action-types';


const reducer = (petsState = [], action) => {
  switch (action.type) {
    case ADD_PET: {
      const newPet = Object.assign({}, action.data);
      petsState = [...petsState, newPet];
      return petsState;
    }
    case REMOVE_PET: {
      petsState = petsState.filter(pet => pet.id !== action.data.id);
      return petsState;
    }
    default: {
      return petsState;
    }
  }
};

export default reducer;
