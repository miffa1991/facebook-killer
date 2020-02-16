import React from 'react';
import s from './Messages.module.css';



const MessageItem = (props) => {
  return (
    <div className={`${s['main-message-box']} ${s['ta-right']}`}>
      <div className={`${s['message-dt']}`}>
        <div className={s['message-inner-dt']}>
          <p>{props.lastMessage}</p>
        </div>
        <span>{props.date}</span>
      </div>
    </div>
  )
}


const Messages = (props) => {
  let dialogsElement = props.dialogItem.map(d => <MessageItem name={d.name} id={d.id} lastMessage={d.lastMessage} date={d.date} />);
  let newMessageChange = React.createRef();
  let newMessage = () => props.newMessage();
  let changeMessage = () => {
    let text = newMessageChange.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="col-lg-8 col-md-12 col-sm-12">
      <div className={s['main-conversation-box']}>
        <div className={s['message-bar-head']}>
          <div className={s['usr-msg-details']}>
            <div className={s['usr-ms-img']}>
              <img src="images/messages/1_chat.jpg" alt="" className={s.mCS_img_loaded}></img>
            </div>
            <div className={s['usr-mg-info']}>
              <h3>John Doe</h3>
              <p>Online</p>
            </div>
          </div>
          <div className={s['message-heading2']}>
            <i className={`${s.fas} ${s['fa-trash-alt']}`}></i>
          </div>
        </div>
        <div className={`${s['messages-line']} ${s.mCustomScrollbar_mCS_1}}`}>
          <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" >
            <div id="mCSB_1_container" className="mCSB_container">
              <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"  >
                <div id="mCSB_1_container" className="mCSB_container">
                  {dialogsElement}
                </div>
                <div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" >
                  <div className={s['mCSB_draggerContainer']}>
                    <div id="mCSB_1_dragger_vertical" className={s.mCSB_dragger} >
                      <div className={s.mCSB_dragger_bar}>
                      </div>
                    </div>
                    <div className={s.mCSB_draggerRail}></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mCSB_1_scrollbar_vertical" className={`${s['mCSB_scrollTools']} ${s[' mCSB_1_scrollbar']} ${s[' mCS-light']} ${s.mCSB_scrollTools_vertical}`}>
              <div className={s.mCSB_draggerContainer}>
                <div id="mCSB_1_dragger_vertical" className={s.mCSB_dragger} ><div className={s.mCSB_dragger_bar}></div>
                </div>
                <div className={s.mCSB_draggerRail}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={s['message-send-area']}>
            <div className={s['mf-field']}>
              <textarea onChange={changeMessage} ref={newMessageChange} value={props.newMessageText} />
              <button onClick={newMessage}>Send</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Messages;