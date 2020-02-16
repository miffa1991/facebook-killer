import React from 'react';
import s from './DialogItem.module.css';
import DialogItem from './DialogsItem/DialogItem';


const DialogItems = (props) => {

  let dialogsElement = props.dialogItem.map(d => <DialogItem name={d.name} id={d.id} lastMessage={d.lastMessage} date={d.date} />);
  
  return (
    <div className="col-lg-4 msg col-sm-12">
      <div className={s.rightside}>
        <a href="#"><img src="../../../assets/img/listing/search.png" alt="" /></a>
        <input type="text" placeholder="Enter a keyword" />
      </div>
      {dialogsElement}
    </div>
  )
}

export default DialogItems;