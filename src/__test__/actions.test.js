import * as actions from '../actions';
import { GET_POSTS_SUCCESS, SHOW_MORE_POSTS } from  '../constants';

describe('actions', () => {
  xit ('should create a GET_POSTS_SUCCESS action', () => {
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
    const expectedAction = {
      type: GET_POSTS_SUCCESS,
      posts,
    };
    expect(actions.getPostsSuccess(posts)).toEqual(expectedAction);
  })
})