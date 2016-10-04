const React = require('react');
const ReactDOM = require('react-dom');

const heading = <h1>The world is never enough</h1>;

const listOfItems = (
  <ul className="list">
    <li className="item">Item 1</li>
    <li className="item">Item 3</li>
    <li className="item">Item 5</li>
  </ul>
);

const container = (<div>
  {heading}
  {listOfItems}
</div>);

ReactDOM.render(container, document.querySelector('#react-application'), () => {
  console.log('finished render');
});
