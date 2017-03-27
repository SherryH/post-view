import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../actions';
import { GET_POSTS_SUCCESS, SHOW_MORE_POSTS } from '../constants';

describe('action creators', () => {

    beforeEach( () => {
      // import and pass your custom axios instance to this method
      moxios.install();
    });

    afterEach( () => {
      // import and pass your custom axios instance to this method
      moxios.uninstall();
    });

  it ('should create a GET_POSTS_SUCCESS action when fetching has been done', () => {
    // use nock to intercept any http request and return mock data
    const posts = [{
      id: 2,
      userId: 2,
      title: 'title2',
      body: 'body2',
    }, {
      id: 3,
      userId: 3,
      title: 'title3',
      body: 'body3',
    }];

    moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
      status: 200,
      data: posts,
    });

    const middlewares = [thunk]; // add your middlewares like `redux-thunk`
    const mockStore = configureStore(middlewares);
    const store = mockStore({ numPosts: 10, posts: [], currentPosts: [] });
    const expectedAction = {
      type: GET_POSTS_SUCCESS,
      posts,
    };

    moxios.wait(() => {
      store.dispatch(actions.getPosts())
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });

  it ('should create a SHOW_MORE_POSTS action', () => {
    const expectedAction = {
      type: SHOW_MORE_POSTS,
    };
    expect(actions.showMorePosts()).toEqual(expectedAction);
  });
});
