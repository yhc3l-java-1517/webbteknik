import React from 'react';

const HelloWorld = props => (
  <div>
    <h1>{props.text}</h1>
    {props.children}
    <h2> Goodbye </h2>
  </div>
);

export default HelloWorld
