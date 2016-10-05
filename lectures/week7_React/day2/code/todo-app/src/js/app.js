import React from 'react';
import ReactDOM from 'react-dom';

const greeting = 'Hi all';
const h1 = <h1 className="my-heading">{greeting}</h1>;
const MyComponent = React.createClass({
  render: function (){
    if (this.props.isHidden) {
      return null;
    }
    return <h1 className="my-heading">This my component</h1>;
  }
});

const myNewComponent = React.createElement(MyComponent, {
  className: 'my-class',
  isHidden: false
});

const my2NewComponent = <MyComponent />
ReactDOM.render(my2NewComponent, document.querySelector('#application'));
