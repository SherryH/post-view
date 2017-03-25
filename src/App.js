import React from 'react';
import Post from './Post';

const dummyData = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }];

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
      {
        dummyData.map((data) => (
          <Post key={data.id.toString()} userId={data.userId} title={data.title} body={data.body}/>
        ))
      }
    </div>
  );
};

export default App;