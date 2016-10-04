const React = require('react');
const ReactDOM = require('react-dom');

const TodoHeading = (props) => {
  if (props.isHidden) {
    return null;
  }
  return React.createElement('h1', {}, 'react component header');
};

TodoHeading.propTypes = {
  isHidden: React.PropTypes.bool.isRequired
};

const todoHeadingElement = React.createElement(TodoHeading, {
  isHidden: false
});

ReactDOM.render(todoHeadingElement, document.querySelector('#react-application'), () => {
  console.log('finished render');
});
