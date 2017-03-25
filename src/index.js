import React from 'react';
import {render} from 'react-dom';

const elem = <div>Hello World</div>;

render(
  elem,
  document.getElementById('app')
);