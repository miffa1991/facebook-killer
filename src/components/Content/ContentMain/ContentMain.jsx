import React from 'react';
import s from './ContentMain.module.css';
import { Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';


const ContentMain = () => {
  return (
      <div id={s['content-wrapper']}>
        <div className={`${s['container-fluid']} ${s['pb-0']}`}>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
  )
}


export default ContentMain;