import React from 'react';

const Pet = (props) => {
  function handleClick() {
    props.onBuy(props.pet);
  }
  return (
    <li>
      {props.pet.name} <button type="button" onClick={handleClick}>Buy</button>
    </li>
  );
};

const PetList = props => (
  <div>
    <h2>pets</h2>
    <ul>
      {props.pets.map((pet, i) => <Pet key={i} pet={pet} onBuy={props.onBuy} />)}
    </ul>
  </div>
  );

export default PetList;
