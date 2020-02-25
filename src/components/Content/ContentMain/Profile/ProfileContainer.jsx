import React from 'react';
import { newPost, updatePost, pageProfile  } from '../../../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from "react-redux";

import { withRouter } from 'react-router-dom';
import { userAPI } from '../../../../API/api';


class ProfileAPIContainer extends React.Component {

  componentDidMount() {    
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    userAPI.getProfile(userId).then(data => {
      this.props.pageProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} profilePage={this.props.profilePage} />
  }
}

const mapStateToProps = (state) => {
  return {
    postItems: state.postItems,
    profilePage: state.postItems.profilePage
  }
}

const WithRouterProfileContainer = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, 
  { newPost, updatePost, pageProfile })(WithRouterProfileContainer);

export default ProfileContainer;