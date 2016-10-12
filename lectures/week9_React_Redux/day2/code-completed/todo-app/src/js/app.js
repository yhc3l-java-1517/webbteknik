import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import PetShopContainer from './components/pet-shop-container';


ReactDOM.render(
    (<Provider store={store}>
      <PetShopContainer />
    </Provider>),
    document.querySelector('#application')
  );
