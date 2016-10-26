import { CLEAR_ERROR, SET_ERROR } from '../constants/action-types';

const initialState = {
  hasError: false,
  errorMessage: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return { hasError: true, errorMessage: action.data };
    }
    case CLEAR_ERROR: {
      return Object.assign({}, initialState);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
