import { createStore, combineReducers } from "redux";
import postReducer from './profile-reducer';
import messageReducer from './message-reducer';
import usersReducer from './users-reducer';
import loginReducer from './login-reducer';

let reducersBox = combineReducers({
  postItems: postReducer,
  messageItems: messageReducer,
  usersPage: usersReducer,
  loginReducer: loginReducer
});

let store = createStore(reducersBox);


window.store = store;
export default store;

