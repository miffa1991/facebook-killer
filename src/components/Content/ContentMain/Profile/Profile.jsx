import React from 'react';
import s from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  let newPost = () => props.newPost();
  let changePost = (e) => {
    let body = e.target.value;
    props.updatePost(body);
  }
  debugger;
  return (
    
    <div>
      <ProfileInfo profilePage={props.profilePage} />
      <MyPosts postItems={props.postItems.postItem} />
      <div className={s['message-send-area']}>
        <div className={s['mf-field']}>
          <textarea onChange={changePost} value={props.postItems.newPostText} />
          <button onClick={newPost}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default Profile;