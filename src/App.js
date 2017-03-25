import React from 'react';

const App = () => {
  return (
    <div id="post-list">
      A list of posts
      <div className="post">
        <div className="post-user">UserId</div>
        <div>
          <div className="post-title">title</div>
          <div>Message</div>
        </div>
      </div>

      <div className="post">
        <div className="post-user">UserId2</div>
        <div>
          <div className="post-title">title2</div>
          <div>Message2</div>
        </div>
      </div>
      <div className="post">
        <div className="post-user">UserId2</div>
        <div>
          <div className="post-title">title2</div>
          <div>Message2</div>
        </div>
      </div>
    </div>
  );
};

export default App;