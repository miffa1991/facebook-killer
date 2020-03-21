import React from 'react';
import s from './ContentMain.module.css';
import { Route } from 'react-router-dom';

import Preloader from '../../common/Preloader/Preloader';


const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const Login = React.lazy(() => import('../../Login/Login'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const Dialogs = React.lazy(() => import('./Dialogs/Dialogs'));

const ContentMain = (props) => {

	return (
		<div id={s['content-wrapper']}>
			<div className={`${s['container-fluid']} ${s['pb-0']}`}>
				<Route path='/users' render={() => {
					return <React.Suspense fallback={<Preloader />}> <UsersContainer />  </React.Suspense>
				}} />
				<Route path='/dialogs' render={() => { return <React.Suspense fallback={<Preloader />}> <Dialogs />   </React.Suspense> }} />
				<Route path='/profile/:userId?' render={() => {
					return <React.Suspense fallback={<Preloader />}> <ProfileContainer />  </React.Suspense>
				}} />
				<Route path='/login' render={() => { return <React.Suspense fallback={<Preloader />}> <Login />  </React.Suspense> }} />
			</div>
		</div>
	)
}


export default ContentMain;