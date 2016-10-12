import * as types from '../constants/action-types';

module.exports.addPet = pet => ({
  type: types.ADD_PET,
  data: pet
});
module.exports.removePet = pet => ({
  type: types.REMOVE_PET,
  data: pet
});
module.exports.addToBasket = pet => ({
  type: types.ADD_TO_BASKET,
  data: pet
});
module.exports.removeFromBasket = pet => ({
  type: types.REMOVE_FROM_BASKET,
  data: pet
});
module.exports.checkout = () => ({
  type: types.CHECKOUT
});
module.exports.setUser = user => ({
  type: types.SET_USER,
  data: user
});
