import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
      <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me</div> 
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