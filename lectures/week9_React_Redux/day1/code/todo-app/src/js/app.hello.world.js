import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';

const myHelloWorld = (
  <HelloWorld text="Hello World">
    <p>The cat sat on the mat</p>
    <h3>This is fun</h3>
  </HelloWorld>
);

ReactDOM.render(myHelloWorld, document.querySelector('#application'));
