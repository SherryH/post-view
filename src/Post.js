import React from 'react';

const Post = ({userId, title, body}) => (
  <div className="post">
    <div className="post-user">{userId}</div>
    <div>
      <div className="post-title">{title}</div>
      <div>{body}</div>
    </div>
  </div>
);

export default Post;