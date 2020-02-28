import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postReducer from './profile-reducer';
import messageReducer from './message-reducer';
import usersReducer from './users-reducer';
import loginReducer from './login-reducer';
import { reducer as formReducer } from 'redux-form'

let reducersBox = combineReducers({
  postItems: postReducer,
  messageItems: messageReducer,
  usersPage: usersReducer,
  loginReducer: loginReducer,
  form: formReducer
});

let store = createStore(reducersBox, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;

