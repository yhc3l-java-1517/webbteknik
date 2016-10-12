import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import * as actions from './actions';
import ShopContainer from './components/shop-container';

ReactDOM.render((
  <Provider store={store}>
    <ShopContainer />
  </Provider>),
  document.querySelector('#application'));
