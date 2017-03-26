import React from 'react';
import Post from './Post';
import styles from './app.css';

function App(props) {
  return (
    <div id={styles.postList}>
      <h2>A list of posts </h2>
      {
        props.currentPosts.map(post => (
          <Post key={post.id.toString()} userId={post.userId} title={post.title} body={post.body} />
        ))
      }
      <button onClick={props.showMorePosts}>Show More</button>
    </div>
  );
}

App.defaultProps = {
  currentPosts: [],
  showMorePosts: function showMorePosts() {},
};

App.propTypes = {
  showMorePosts: React.PropTypes.func,
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
