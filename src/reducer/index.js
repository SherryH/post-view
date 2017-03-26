import { GET_POSTS_SUCCESS } from '../constants';

const initialStates = {
  numPosts: 10,
  posts: [],
  currentPosts: [],
};

// if separating reducers later, only need to return the post state later
export default function reducer(state = initialStates, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      const newState = Object.assign({}, state);
      newState.posts = action.posts;
      newState.currentPosts = action.posts.slice(0, newState.numPosts);
      return newState;
    default:
      return state;
  }
}
