import React from 'react';
import {render} from 'react-dom';
import App from './App';

const elem = <div>Hello World</div>;

render(
  <App />,
  document.getElementById('app')
);