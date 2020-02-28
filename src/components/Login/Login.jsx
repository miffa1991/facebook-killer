import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { require, maxLengthReq } from '../../utils/validate/validators';

let maxLength10 = maxLengthReq(10);
let maxLength16 = maxLengthReq(16);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Login'} validate={[require, maxLength10]} name={'login'} component={Input}/></div>
      <div><Field placeholder={'Password'} name={'password'} validate={[require, maxLength16]} component={Input}/></div>
      <div><Field type={'checkbox'} name={'rememberMe'} validate={[require]} component={Input}/> remember me</div> 
      <button>Send</button>
    </form>
  )
}

const LoginRedaxFrorm = reduxForm ({
  // a unique name for the form
  form: 'login'
})(LoginForm);


const Login = (props) => {
  const onSubmit = (FormData) => {
    console.log(FormData);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginRedaxFrorm onSubmit={onSubmit} />
    </div>
    
  )
}

export default Login;