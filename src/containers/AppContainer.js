import { connect } from 'react-redux';
import App from '../components/App';

const initialStates = {
  numPosts: 10,
  posts: [],
  currentPosts: [],
};
function mapStateToProps(state = initialStates) {
  const { numPosts, posts, currentPosts } = state;
  return {
    numPosts,
    posts,
    currentPosts,
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
