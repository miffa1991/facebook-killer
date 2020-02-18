import React from 'react';
import { connect } from "react-redux";
import DialogItems from './DialogItems';

const mapStateToProps = (state) => {
  return {
    state:state.messageItems,
  }
}

const mapDispatchToProps = (dispatch) => {}

const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogItemsContainer;