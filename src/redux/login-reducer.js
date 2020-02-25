import { authAPI } from "../API/api";

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
      return { ...state, ...action.data, 
        isAutorizate:true} //рокриваемо масив і обєднуємо

    default:
      return state;
  }
}


export const setDataUser = (id, email, login) => ({ type: SET_LOGIN_USER, data: { id, email, login} });



export const getAuth = () => {

  return (dispatch) => {
    authAPI.me().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setDataUser(id, email, login));
      }

    });
  }
}

export default loginReducer; 