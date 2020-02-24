import React from 'react';
import Header from './Header';
import { setDataUser } from './../../redux/login-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      { withCredentials: true}).then(response => {
     
      if(response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setDataUser( id, email, login);
      }
    
    });
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
    isAutorizate: state.loginReducer.isAutorizate,
    login: state.loginReducer.login
  }
)

const HeaderContainer = connect(mapStateToProps, { setDataUser })(HeaderAPIContainer);

export default HeaderContainer;