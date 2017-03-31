import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

// thunk is a middleware that is applied to actions
// it allows the 'dispatch' function to be passed to action creators as param,
//    in order to delay action dispatch
// it allows action creators to return a function instead of an object
//    if object, it will be passed to reducer, if function, it will skip reducer
//    since making async request does not invole state change initially, reducer is skipped
//    the response usually entails state change, then another object action can be dispatched to trigger reducer

const configureStore = () => {
  const middlewares = [thunk];
  if (!process.env.NODE_ENV) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  return createStore(reducer, applyMiddleware(...middlewares));
};

export default configureStore;
