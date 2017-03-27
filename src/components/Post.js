import React from 'react';
import styles from './post.css';

const Post = ({ post }) => (
  <div className={styles.post}>
    <div className={styles.postUser}>{post.userId}</div>
    <div className={styles.postMessage}>
      <div className={styles.postTitle}>{post.title}</div>
      <div>{post.body}</div>
    </div>
  </div>
);

Post.defaultProps = {
  post: {},
};

Post.propTypes = {
  post: React.PropTypes.shape({
    userId: React.PropTypes.number,
    title: React.PropTypes.string,
    body: React.PropTypes.string,
  }),
};

export default Post;
