import React from 'react';
import { newMessageActionCreator } from './../../../../../redux/message-reducer';
import Messages from './Messages';
import { connect } from "react-redux";


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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;