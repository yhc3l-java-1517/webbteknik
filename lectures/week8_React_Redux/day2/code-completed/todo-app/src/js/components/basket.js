import React from 'react';

const Item = (props) => {
  function handleClick() {
    props.onRemoveFromBasket(props.pet);
  }
  return (
    <li>
      {props.pet.name}
      <button
        type="button"
        onClick={handleClick}
      >
        Remove
      </button>
    </li>
  );
};

const Basket = props => (
  <div>
    <h2>basket</h2>
    <ul>
      {props.basket.map((pet, i) => <Item
        key={i}
        pet={pet}
        onRemoveFromBasket={props.onRemoveFromBasket}
      />)}
    </ul>
  </div>
  );

export default Basket;
