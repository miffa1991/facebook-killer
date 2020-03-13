import { authAPI } from "../API/api";
import { stopSubmit } from 'redux-form';
const SET_LOGIN_USER = 'SET_LOGIN_USER';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAutorizate:false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_LOGIN_USER:
      return { ...state, 
        ...action.payLoad, 
      //  isAutorizate:true
      } //рокриваемо масив і обєднуємо

    default:
      return {...state};
  }
}


export const setDataUser = (id, email, login, isAutorizate) => ({ type: SET_LOGIN_USER, payLoad: { id, email, login, isAutorizate} });



export const getAuth = () => (dispatch) => {
   return authAPI.me().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setDataUser(id, email, login, true));
      }

    });
  }


export const login = (login, email, rememberMe, isAutorizate) => {

  return (dispatch) => {
    
    authAPI.login(login, email, rememberMe, isAutorizate).then(data => {
      if (data.resultCode === 0) {
        dispatch( getAuth() );
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }) );
      }

    });
  }
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setDataUser(null, null, null, false));
      }

    });
  }


export default loginReducer; 