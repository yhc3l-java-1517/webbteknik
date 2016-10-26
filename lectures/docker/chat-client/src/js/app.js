import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ChatContainer from './components/chat-container';

const myChat = (
  <Provider store={store}>
    <ChatContainer />
  </Provider>
);

ReactDOM.render(myChat, document.querySelector('#application'));
