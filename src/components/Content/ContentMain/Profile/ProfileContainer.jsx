import React from 'react';
import { newPost, updatePost, pageProfile, getProfile  } from '../../../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';



class ProfileAPIContainer extends React.Component {

  componentDidMount() {    
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
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
  { newPost, updatePost, pageProfile, getProfile })(WithRouterProfileContainer);

export default ProfileContainer;