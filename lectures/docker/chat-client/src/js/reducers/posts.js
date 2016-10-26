import { ADD_POSTS } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSTS: {
      return [...state, ...action.data];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
