import { connect } from 'react-redux';
import App from '../components/App';


function mapStateToProps(state) {
  const { numPosts, posts, currentPosts } = state;
  return {
    numPosts,
    posts,
    currentPosts,
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
