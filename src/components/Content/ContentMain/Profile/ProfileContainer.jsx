import React from 'react';
import { newPost, updatePost, pageProfile  } from '../../../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from "react-redux";
import * as axios from 'axios';


class ProfileAPIContainer extends React.Component {

  componentDidMount() {    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      debugger;
      this.props.pageProfile(response.data);
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

const ProfileContainer = connect(mapStateToProps, 
  { newPost, updatePost, pageProfile  })(ProfileAPIContainer);

export default ProfileContainer;