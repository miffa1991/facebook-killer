import React from 'react';
import s from './ContentMain.module.css';
import { Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';


const ContentMain = (props) => {

  return (
      <div id={s['content-wrapper']}>
        <div className={`${s['container-fluid']} ${s['pb-0']}`}>
        <Route path='/dialogs' render={() => <Dialogs dialogItem={props.dialogItem} newMessage={props.newMessage} updateNewPostText={props.updateNewPostText} newMessageText={props.newMessageText}/> } />
      <Route path='/profile' render={ () => <Profile /> } />
        </div>
      </div>
  )
}


export default ContentMain;