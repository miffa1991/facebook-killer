import React from 'react';
import Header from './Header';
import { logout } from './../../redux/login-reducer';
import { connect } from 'react-redux';

class HeaderAPIContainer extends React.Component {

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

const HeaderContainer = connect(mapStateToProps, { logout })(HeaderAPIContainer);

export default HeaderContainer;