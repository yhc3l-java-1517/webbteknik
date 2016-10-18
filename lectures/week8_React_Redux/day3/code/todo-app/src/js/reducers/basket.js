import { ADD_TO_BASKET, REMOVE_FROM_BASKET, CHECKOUT } from '../constants/action-types';

const reducer = (basketState = [], action) => {
  let newBasketState;
  switch (action.type) {
    case ADD_TO_BASKET: {
      const pet = Object.assign({}, action.data);
      newBasketState = [...basketState, pet];
      return newBasketState;
    }
    case REMOVE_FROM_BASKET: {
      newBasketState = basketState.filter(item => item.id !== action.data.id);
      return newBasketState;
    }
    case CHECKOUT: {
      newBasketState = [];
      return newBasketState;
    }
    default: {
      return basketState;
    }
  }
};

export default reducer;
