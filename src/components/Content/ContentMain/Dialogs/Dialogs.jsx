import React from 'react';
import DialogItems from './DialogItems/DialogItems';
import MessagesContainer from './Messages/MessagesContainer';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';

const Dialogs = (props) => {

  return (
    <div className="row">
      <DialogItemsContainer />
      <MessagesContainer />
    </div>
  )
}

export default Dialogs;