import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postItemsElement = props.postItems.map(d => <Post name={d.name} id={d.id} lastMessage={d.lastMessage} date={d.date} />);

  return (
    <div id="mCSB_1_container" className={s.mCSB_container}>
      {postItemsElement}
    </div>
  )
}

export default MyPosts;