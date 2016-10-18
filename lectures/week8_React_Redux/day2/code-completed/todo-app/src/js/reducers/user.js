export default (state = { id: 1, username: 'fred' }, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const user = Object.assign({}, action.data);
      return user;
    }
    default: {
      return state;
    }
  }
};
