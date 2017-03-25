import React from 'react';
import styles from './post.css';

const Post = ({ userId, title, body }) => (
  <div className={styles.post}>
    <div className={styles.postUser}>{userId}</div>
    <div>
      <div className={styles.postTitle}>{title}</div>
      <div>{body}</div>
    </div>
  </div>
);

Post.defaultProps = {
  userId: '',
  title: '',
  body: '',
};

Post.propTypes = {
  userId: React.PropTypes.number,
  title: React.PropTypes.string,
  body: React.PropTypes.string,
};

export default Post;
