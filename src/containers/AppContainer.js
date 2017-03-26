import { connect } from 'react-redux';
import App from '../components/App';
import { showMorePosts } from '../actions';


function mapStateToProps(state) {
  const { numPosts, posts, currentPosts } = state;
  return {
    numPosts,
    posts,
    currentPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showMorePosts: () => dispatch(showMorePosts()),
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
