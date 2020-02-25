import React from 'react';
import s from './ContentMain.module.css';
import { Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import Login from '../../Login/Login';


const ContentMain = (props) => {

  return (
    <div id={s['content-wrapper']}>
      <div className={`${s['container-fluid']} ${s['pb-0']}`}>
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/dialogs' render={() => <Dialogs />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div>
  )
}


export default ContentMain;