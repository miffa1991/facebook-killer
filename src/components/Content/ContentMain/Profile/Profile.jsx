import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Field, reduxForm } from 'redux-form';


const AddPost = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={s['mf-field']}>
      <Field placeholder={'add post'} name={'post'} component={'textarea'}  />
      <button>Add post</button>
    </form>
  )
}
const AddPostRedaxForm = reduxForm({
  // a unique name for the form
  form: 'addPost'
})(AddPost);

const Profile = (props) => {
  let submitPost = (values) =>{
    props.newPost(values.post);
  }
  return (
    
    <div>
      <ProfileInfo profilePage={props.profilePage} status={props.status} updateStatus={props.updateStatus} />
      <MyPosts postItems={props.postItems.postItem} />
      <div className={s['message-send-area']}>
        <AddPostRedaxForm onSubmit={submitPost} />
      </div>
    </div>
  )
}

export default Profile;