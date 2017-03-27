import React from 'react';
import renderer from 'react-test-renderer';
import Post from '../components/Post';
import App from '../components/App';

describe ('Component presentation:', () => {

  it ('Post component renders correctly', () => {
    const post = { userId: 1, title: 'dummyTitle', body: 'dummyBody' };
    const rendered = renderer.create(
      <Post post={post} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it ('App component renders correctly', () => {
    const currentPosts = [{
      id: 2,
      userId: 2,
      title: 'title2',
      body: 'body2'
    },{
      id: 3,
      userId: 3,
      title: 'title3',
      body: 'body3'
    }];
    const rendered = renderer.create(
      <App currentPosts={currentPosts} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
