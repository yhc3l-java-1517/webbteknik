import { SET_LOADING, SET_LOADED, SET_SOCKET_ACTIVE, SET_SOCKET_INACTIVE } from '../constants/action-types';

const initialState = {
  isLoading: false,
  isSocketActive: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case SET_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case SET_SOCKET_ACTIVE: {
      return Object.assign({}, state, { isSocketActive: true });
    }
    case SET_SOCKET_INACTIVE: {
      return Object.assign({}, state, { isSocketActive: false });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
