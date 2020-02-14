import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';


const Dialogs = () => {
  return (
    <div className="row">
      <DialogItem />
      <Messages />
    </div>
  )
}

export default Dialogs;