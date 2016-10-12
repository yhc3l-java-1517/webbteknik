import { SET_USER } from '../constants/action-types';

const reducer = (userState = { id: 1, name: 'Tom' }, action) => {
  switch (action.type) {
    case SET_USER: {
      userState = Object.assign({}, action.data);
      return userState;
    }
    default: {
      return userState;
    }
  }
};

export default reducer;
