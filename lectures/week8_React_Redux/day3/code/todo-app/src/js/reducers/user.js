import { SET_USER } from '../constants/action-types';

const reducer = (userState = { id: 1, username: 'Tom' }, action) => {
  let newState;
  switch (action.type) {
    case SET_USER: {
      newState = Object.assign({}, action.data);
      return newState;
    }
    default: {
      return userState;
    }
  }
};

export default reducer;
