import React from 'react';
import s from './Content.module.css';
import ContentMain from './ContentMain/ContentMain';
import Sidebar from './Sidebar/Sidebar';



const Content = (props) => {

  return (
    <div className="full-width">
      <div id="wrapper">
        <Sidebar />
        <ContentMain dialogItem={props.dialogItem} newMessage={props.newMessage} updateNewPostText={props.updateNewPostText} newMessageText={props.newMessageText}/>
      </div>
    </div>
  )
}


export default Content;