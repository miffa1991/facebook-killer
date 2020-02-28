import React from 'react';
import s from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';


const MessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={s['mf-field']}>
      <Field name={'message'} component={'textarea'}  value={props.state.newMessageText} />
      <button>Send</button>
    </form>
  )
}

const MessageRedaxFrorm = reduxForm({
  // a unique name for the form
  form: 'message'
})(MessageForm);


const Messages = (props) => {

  let submitMessage = (values) => {
    props.newMessage(values.message);
    //alert(values.message);
  }
  let dialogsElement = props.state.messageItem.map(d => <MessageItem name={d.name} id={d.id} lastMessage={d.lastMessage} date={d.date} />);
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
            <MessageRedaxFrorm state={props.state} onSubmit={submitMessage} />
        </div>
      </div>
    </div>
  )
}

export default Messages;