import React from 'react';
import s from './DialogItem.module.css';

const DialogItem = () => {
  return (
    <div className="col-lg-4 msg col-sm-12">
      <div className={s.rightbox}>
        <div className={s.rightside}>
          <a href="#"><img src="../../../assets/img/listing/search.png" alt=""></img></a>
          <input type="text" placeholder="Enter a keyword"></input>
        </div>
        <div className={s['msg-scroll']}>
          <div className={s.rightmsg}>
            <div className={s['message-radius']}>
              <img src="src/assets/img/messages/1_chat.jpg" alt="" title=""></img>
            </div>
            <div className={s['message-heading']}>
              Rock William
            <p>Hi what are you doing</p>
            </div>
            <div className={s['message-heading']}>
              <span>Today, 02.00PM</span>
            </div>
            <div className="clearfix"></div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogItem;