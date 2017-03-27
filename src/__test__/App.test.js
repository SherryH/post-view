import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';
import styles from '../components/app.css';

test('App component should call "showMorePosts" on click "Show More" ', () => {
  // this test is like verifying the React onClick instead of actual component
  // testing the integration of dispatched action->changed state->updated view is more complex
  function makePosts(num) {
    const arr = [];
    for (var i = 0; i < num; i++){
      arr.push({ id: i, userId: i, title: `title${i}`, body: `body${i}`});
    }
    return arr;
  }
  const currentPosts = makePosts(11);
  const props = {
    currentPosts,
    showMorePosts: jest.fn(),
  };
  const wrapper = mount(
    <App {...props} />
  );
  wrapper.find('button').simulate('click');
  expect(props.showMorePosts.mock.calls.length).toBe(1);
});