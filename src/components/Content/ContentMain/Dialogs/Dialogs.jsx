import React from 'react';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

  return (
    <div className="row">
      <DialogItems dialogItem={props.dialogItem} />
      <Messages dialogItem={props.dialogItem} newMessageText={props.newMessageText} dispatch={props.dispatch} />
    </div>
  )
}

export default Dialogs;