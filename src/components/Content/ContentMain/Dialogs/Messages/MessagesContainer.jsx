import React from 'react';
import { newMessageActionCreator, updateNewMessageActionCreator } from './../../../../../redux/message-reducer';
import Messages from './Messages';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    state: state.messageItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newMessage: () => { dispatch(newMessageActionCreator()) },
    changeMessage:
      (body) => {
        dispatch(updateNewMessageActionCreator(body));
      }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;