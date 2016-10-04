const React = require('react');
const ReactDOM = require('react-dom');

const heading = React.createElement('h1', {
  className: 'title',
  key: 'heading'
}, 'The world is never enough');

const listItem1 = React.DOM.li({
  className: 'items',
  key: 'item-1'
}, 'Item 1');
const listItem2 = React.DOM.li({
  className: 'items',
  key: 'item-2'
}, 'Item 2');
const listItem3 = React.DOM.li({
  className: 'items',
  key: 'item-3'
}, 'Item 3');

const reactFragment = [listItem1, listItem2, listItem3];

const listOfItems = React.DOM.ul({
  key: 'list'
}, reactFragment);

const container = React.DOM.div({
  className: 'main-container'
}, [heading, listOfItems]);

ReactDOM.render(container, document.querySelector('#react-application'), () => {
  console.log('finished render');
});
