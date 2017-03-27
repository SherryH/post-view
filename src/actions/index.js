import axios from 'axios';
import { GET_POSTS_SUCCESS, SHOW_MORE_POSTS } from '../constants';

const fetchPostAjax = () => {
  const root = 'https://jsonplaceholder.typicode.com';
  return axios.get(`${root}/posts`)
  .then(res => res.data)
  .catch(error => `ERROR FETCHING POSTS: ${error}`);
};

function getPostsSuccess(posts) {
  return { type: GET_POSTS_SUCCESS, posts };
}

export function showMorePosts() {
  return {
    type: SHOW_MORE_POSTS,
  };
}

// getPosts returns a function, that gets passed through Thunk
// the action function will not update store, only action object will
export const getPosts = () =>
  (dispatch) => {
    // make ajax call to get list of posts
    // upon successful return, dispatch actions to update states
    // the action dispatched will be objects
    fetchPostAjax()
    .then((posts) => {
      console.log('posts returned', posts);
      dispatch(getPostsSuccess(posts));
    })
    .catch(error => `ERROR GETTING POSTS: ${error}`);
  };
