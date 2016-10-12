import React from 'react';
import { connect } from 'react-redux';
import { setUser, addToBasket, removeFromBasket } from '../actions';
import Welcome from './welcome';
import PetList from './pet-list';
import Basket from './basket';
import UserUpdateForm from './user-update-form';

class PetShopContainer extends React.Component {
  render() {
    return (
      <div>
        <Welcome username={this.props.username} />
        <UserUpdateForm
          onSetUser={this.props.onSetUser}
        />
        <PetList
          pets={this.props.pets}
          onBuy={this.props.onBuy}
        />
        <Basket
          basket={this.props.basket}
          onRemoveFromBasket={this.props.onRemoveFromBasket}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  pets: state.pets,
  basket: state.basketItems
});

const mapDispatchToProps = dispatch => ({
  onSetUser: (name) => {
    dispatch(setUser(name));
  },
  onBuy: (pet) => {
    dispatch(addToBasket(pet));
  },
  onRemoveFromBasket: (pet) => {
    dispatch(removeFromBasket(pet));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PetShopContainer);
