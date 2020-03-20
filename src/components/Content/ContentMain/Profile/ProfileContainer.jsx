import React from 'react';
import { newPost, getProfile, getStatus, updateStatus } from '../../../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../../hoc/withAutHogRedirect';
import { compose } from 'redux';

class ProfileAPIContainer extends React.Component {

	componentDidMount () {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userIdAuth;
		}
		this.props.getProfile(userId);
		this.props.getStatus(userId);

	}

	render () {
		return <Profile {...this.props} profilePage={this.props.profilePage} status={this.props.status} updateStatus={this.props.updateStatus} />
	}
}

const mapStateToProps = (state) => {
	return {
		postItems: state.postItems,
		profilePage: state.postItems.profilePage,
		auth: state.loginReducer.isAutorizate,
		status: state.postItems.status,
		userIdAuth: state.loginReducer.id
	}

}


export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps,
		{ newPost, getProfile, getStatus, updateStatus })
)(ProfileAPIContainer);