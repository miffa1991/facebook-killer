import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { require, maxLengthReq } from '../../utils/validate/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/login-reducer';
import { Redirect } from 'react-router-dom';
import s from './Login.module.css';

let maxLength20 = maxLengthReq(20);
let maxLength36 = maxLengthReq(36);

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form className={s.sinup} onSubmit={handleSubmit}>
			<div className={s['input-container']}><Field className={s['input-field']} placeholder={'Email'} validate={[require, maxLength20]} name={'email'} component={Input} /></div>
			<div className={s['input-container']}><Field className={s['input-field']} placeholder={'Password'} name={'password'} type={'password'} validate={[require, maxLength36]} component={Input} /></div>
			<div className={s['input-container']}><Field type={'checkbox'} name={'rememberMe'} validate={[require]} className={s['input-field']} component={Input} /> remember me</div>
			{error && <div className={'errorSummer'}>{error}</div>}
			<button className={s.btn}>Send</button>
		</form>
	)
}

const LoginRedaxFrorm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm);


const Login = ({ isAutorizate, login }) => {
	if (isAutorizate) {
		return <Redirect to={'/profile'} />
	}
	const onSubmit = (FormData) => {
		login(FormData.email, FormData.password, FormData.rememberMe);
		// console.log(FormData);
	}
	return (
		<div className={s.sign}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-sm-12">
						<div className={s['bg-form']}>
							<div className={s.sinheader}>
								<div className="col-md-6 col-sm-12">
									<a href="/"><img src="images/header/logo.svg" alt="" /></a>
								</div>
								<div className={`${s.sings} col-md-6 col-sm-12`}>
									<a href="#">Sign up now</a>
								</div>
								<div className="clearfix">
								</div>
								<div className={s.sform}>
									<h1>Sign in</h1>
									<span>Hello there! Sign in and start managing your item.</span>
									<div className="row justify-content-md-center">
										<div className="col-lg-4 col-sm-12">
											<LoginRedaxFrorm onSubmit={onSubmit} />
										</div>
									</div>
								</div>
							</div>
							<div className={s['footer-sign']}>
								<div className={`${s.footermenu} ${s['p-left']} col-md-8`}>
									<ul>
										<li><a href="#">About  </a></li>
										<li><a href="#">Faq’s</a></li>
										<li><a href="#"> Privacy policy</a></li>
										<li><a href="#">Advertise</a></li>
										<li><a href="#">career</a></li>
										<li><a href="#">Term and conditions </a></li>
										<li><a href="#">Press</a></li>
										<li><a href="#">Sitemap</a></li>
										<li><a href="#">Tags</a></li>
										<li><a href="#">Blog</a></li>
									</ul>
								</div>
								<div className={`${s['p-left']} ${s.copyrightsign} col-md-4`} >
									© Copyright 2019 by <a href="#">Gambol.</a> All Rights Reserved.
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}
const mapStateToProps = (state) => ({
	isAutorizate: state.loginReducer.isAutorizate
})
export default connect(mapStateToProps, { login })(Login);