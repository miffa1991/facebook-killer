import React from 'react';
import { newPostActionCreator, updatePostActionCreator } from './../../../../redux/post-reducer';
import Profile from './Profile';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postItems: state.postItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: () => { dispatch(newPostActionCreator()) },
    changePost: (body) => { dispatch(updatePostActionCreator(body)) }
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;