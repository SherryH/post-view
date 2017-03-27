import React from 'react';
import { shallow } from 'enzyme';
import Post from '../components/Post';
import styles from '../components/post.css';

test('Post component renders the text inside it', () => {
  const post = { userId: 1, title: 'dummyTitle', body: 'dummyBody' };
  const wrapper = shallow(
    <Post post={post} />
  );
  const p = wrapper.find(`.${styles.postTitle}`);
  console.log('classname', styles);
});