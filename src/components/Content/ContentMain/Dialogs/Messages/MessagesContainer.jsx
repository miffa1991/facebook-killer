import React from 'react';
import { newMessageActionCreator } from './../../../../../redux/message-reducer';
import Messages from './Messages';
import { connect } from "react-redux";
import { withAuthRedirect } from '../../../../../hoc/withAutHogRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
	return {
		state: state.messageItems,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		newMessage: (text) => { dispatch(newMessageActionCreator(text)) }
	}
}


export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(Messages);


