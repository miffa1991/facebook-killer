import React from 'react';
import Header from './Header';
import { getAuth } from './../../redux/login-reducer';
import { connect } from 'react-redux';

class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
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

const HeaderContainer = connect(mapStateToProps, { getAuth })(HeaderAPIContainer);

export default HeaderContainer;