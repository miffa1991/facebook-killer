import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { require, maxLengthReq } from '../../utils/validate/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/login-reducer';
import { Redirect } from 'react-router-dom';

let maxLength20 = maxLengthReq(20);
let maxLength36 = maxLengthReq(36);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Email'} validate={[require, maxLength20]} name={'email'} component={Input} /></div>
      <div><Field placeholder={'Password'} name={'password'} type={'password'} validate={[require, maxLength36]} component={Input} /></div>
      <div><Field type={'checkbox'} name={'rememberMe'} validate={[require]} component={Input} /> remember me</div>
      {props.error && <div className={'errorSummer'}>{props.error}</div>}
      <button>Send</button>
    </form>
  )
}

const LoginRedaxFrorm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);


const Login = (props) => {
  if (props.isAutorizate) {
    return <Redirect to={'/profile'} />
  }
  const onSubmit = (FormData) => {
    props.login(FormData.email, FormData.password, FormData.rememberMe);
    // console.log(FormData);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginRedaxFrorm onSubmit={onSubmit} />
    </div>

  )
}
const mapStateToProps = (state) => ({
  isAutorizate: state.loginReducer.isAutorizate
})
export default connect(mapStateToProps, { login })(Login);