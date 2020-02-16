import React from 'react';
import s from './../DialogItem.module.css';


const DialogItem = (props) => {
  return (
    <div className={s.rightbox}>
      <div className={s['msg-scroll']}>
        <div className={s.rightmsg}>
          <div className={s['message-radius']}>
            <img src="src/assets/img/messages/1_chat.jpg" alt="" title=""></img>
          </div>
          <div className={s['message-heading']}>
            {props.name}
            <p>{props.lastMessage}</p>
          </div>
          <div className={s['message-heading']}>
            <span>{props.date}</span>
          </div>
          <div className="clearfix"></div>
          <hr></hr>
        </div>
      </div>
    </div>
  )
}

export default DialogItem;