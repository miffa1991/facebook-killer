import React from 'react';
import Header from './Header';
import { setDataUser } from './../../redux/login-reducer';
import { connect } from 'react-redux';
import { userAPI } from '../../API/api';

class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth().then(data => {
      if(data.resultCode === 0) {
        let { id, email, login } = data.data;
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