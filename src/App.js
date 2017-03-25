import React from 'react';
import axios from 'axios';
import Post from './Post';
import styles from './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    const root = 'https://jsonplaceholder.typicode.com';
    axios.get(`${root}/posts`)
    .then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  }
  render() {
    return (
      <div id={styles.postList}>
        A list of posts
        {
          this.state.posts.map(post => (
            <Post key={post.id.toString()} userId={post.userId} title={post.title} body={post.body} />
          ))
        }
      </div>
    );
  }
}

export default App;
