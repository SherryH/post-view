import React from 'react';
import axios from 'axios';
import Post from './Post';
import styles from './app.css';
import { getPosts } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   posts: [],
    //   currentPosts: [],
    //   numPosts: 10,
    // };
    // this.getPosts = this.getPosts.bind(this);
    // this.showMorePosts = this.showMorePosts.bind(this);
  }
  // componentDidMount() {
  //   this.props.dispatch(getPosts());
  // }
  // getPosts() {
  //   const root = 'https://jsonplaceholder.typicode.com';
  //   axios.get(`${root}/posts`)
  //   .then((res) => {
  //     this.setState({
  //       posts: res.data,
  //       currentPosts: res.data.slice(0, 10),
  //     });
  //   });
  // }

  // showMorePosts() {
  //   const numPosts = this.props.numPosts + 10;
  //   this.setState({
  //     numPosts,
  //     currentPosts: this.props.posts.slice(0, numPosts),
  //   });
  // }

  render() {
    return (
      <div id={styles.postList}>
        <h2>A list of posts </h2>
        {
          this.props.currentPosts.map(post => (
            <Post key={post.id.toString()} userId={post.userId} title={post.title} body={post.body} />
          ))
        }
        <button onClick={this.props.showMorePosts}>Show More</button>
      </div>
    );
  }
}

App.defaultProps = {
  numPosts: 10,
  posts: [],
  currentPosts: [],
  dispatch: function() {},
  showMorePosts: function() {},
};

App.propTypes = {
  showMorePosts: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  numPosts: React.PropTypes.number,
  posts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      body: React.PropTypes.string,
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      userId: React.PropTypes.number,
    }),
  ),
  currentPosts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      body: React.PropTypes.string,
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      userId: React.PropTypes.number,
    }),
  ),
};

export default App;
