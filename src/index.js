import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import App from './components/App';
import AppContainer from './containers/AppContainer';
import configureStore from './configureStore';
import { getPosts } from './actions';

const app = document.getElementById('app');

const store = configureStore();

store.dispatch(getPosts());

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  app,
);
