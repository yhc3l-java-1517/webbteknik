const React = require('react');
const ReactDOM = require('react-dom');

class TodoHeading extends React.Component {
  render() {
    if (this.props.isHidden) {
      return null;
    }
    return React.createElement('h1', {}, 'react component header');
  }
}
TodoHeading.propTypes = {
  isHidden: React.PropTypes.bool.isRequired
};

const todoHeadingElement = React.createElement(TodoHeading, {isHidden: true});

const todo = (
  <div>
    <TodoHeading isHidden={false} />
  </div>
);

ReactDOM.render(todo, document.querySelector('#react-application'), () => {
  console.log('finished render');
});
