import { SET_LOADING, SET_LOADED } from '../constants/action-types';

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return { isLoading: true };
    }
    case SET_LOADED: {
      return { isLoading: false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
