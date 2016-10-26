import { SET_USERNAME } from '../constants/action-types';

const reducer = (state = 'anonymous', action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
