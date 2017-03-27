import reducer from '../reducer';
import { GET_POSTS_SUCCESS, SHOW_MORE_POSTS } from  '../constants';

describe('reducer', () => {
  const initialStates = {
    numPosts: 10,
    posts: [],
    currentPosts: [],
  };

  function makePosts(num) {
    const arr = [];
    for (var i = 0; i < num; i++){
      arr.push({ id: i, userId: i, title: `title${i}`, body: `body${i}`});
    }
    return arr;
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialStates);
  });

  it('should handle GET_POSTS_SUCCESS', () => {
    const returnedPosts = 12;
    const action = {
      type: GET_POSTS_SUCCESS,
      posts: makePosts(returnedPosts),
    };
    const state = initialStates;

    expect(reducer(state, action).posts.length).toEqual(returnedPosts);
    expect(reducer(state, action).currentPosts.length).toEqual(initialStates.numPosts);
  });

  it('should handle SHOW_MORE_POSTS', () => {
    const returnedPosts = 32;
    const action = {
      type: SHOW_MORE_POSTS,
    };
    const state = {
      numPosts: 10,
      posts: makePosts(returnedPosts),
      get currentPosts() {
        return makePosts(this.numPosts);
      }
    };
    expect(reducer(state, action).numPosts).toEqual(state.numPosts + 10);
    expect(reducer(state, action).posts.length).toEqual(returnedPosts);
    expect(reducer(state, action).currentPosts.length).toEqual(state.numPosts + 10);
  });

});
