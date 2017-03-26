import { GET_POSTS_SUCCESS } from '../constants';

const initialStates = {
  numPosts: 10,
  posts: [],
  currentPosts: [],
};

export default function reducer(state = initialStates, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
