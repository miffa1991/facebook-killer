import React from 'react';
import s from './ContentMain.module.css';
import { Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import ProfileContainer from './Profile/ProfileContainer';


const ContentMain = (props) => {

  return (
      <div id={s['content-wrapper']}>
        <div className={`${s['container-fluid']} ${s['pb-0']}`}>
        <Route path='/dialogs' render={() => <Dialogs /> } />
        <Route path='/profile' render={() => <ProfileContainer /> } />
        </div>
      </div>
  )
}


export default ContentMain;