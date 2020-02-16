import React from 'react';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

  return (
    <div className="row">
      <DialogItems dialogItem={props.dialogItem} />
      <Messages newMessage={props.newMessage} dialogItem={props.dialogItem} updateNewPostText={props.updateNewPostText} newMessageText={props.newMessageText}/>
    </div>
  )
}

export default Dialogs;