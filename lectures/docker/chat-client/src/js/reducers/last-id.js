import { SET_LAST_ID } from '../constants/action-types';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case SET_LAST_ID: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
