import { ADD_TO_BASKET, REMOVE_FROM_BASKET, CHECKOUT } from '../constants/action-types';

const reducer = (basketState = [], action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const pet = Object.assign({}, action.data);
      basketState = [...basketState, pet];
      return basketState;
    }
    case REMOVE_FROM_BASKET: {
      basketState = basketState.filter(item => item.id !== action.data.id);
      return basketState;
    }
    case CHECKOUT: {
      basketState = [];
      return basketState;
    }
    default: {
      return basketState;
    }
  }
};

export default reducer;
