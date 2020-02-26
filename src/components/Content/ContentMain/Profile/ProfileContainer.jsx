import React from 'react';
import { newPost, updatePost, getProfile  } from '../../../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../../hoc/withAutHogRedirect';
import { compose } from 'redux';

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
    profilePage: state.postItems.profilePage,
    auth: state.loginReducer.isAutorizate
  }
}


export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps,
    { newPost, updatePost, getProfile })
)(ProfileAPIContainer);