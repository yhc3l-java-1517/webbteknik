export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      const basketItem = Object.assign({}, action.data);
      return [...state, basketItem];
    }
    case 'REMOVE_FROM_BASKET': {
      return state.filter((item => item.id !== action.data.id));
    }
    case 'CHECKOUT': {
      return [];
    }
    default: {
      return state;
    }
  }
};
