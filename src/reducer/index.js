import { GET_POSTS_SUCCESS, SHOW_MORE_POSTS } from '../constants';

const initialStates = {
  numPosts: 10,
  posts: [],
  currentPosts: [],
};

// if separating reducers later, only need to return the post state later
export default function reducer(state = initialStates, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.posts = action.posts;
      newState.currentPosts = action.posts.slice(0, newState.numPosts);
      return newState;
    }
    case SHOW_MORE_POSTS: {
      const newNumPosts = state.numPosts + 10;
      const newCurrentPosts = state.posts.slice(0, newNumPosts);
      return Object.assign({}, state, { numPosts: newNumPosts, currentPosts: newCurrentPosts });
    }

    default:
      return state;
  }
}

