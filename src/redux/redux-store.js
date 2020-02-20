import { createStore, combineReducers } from "redux";
import postReducer from './post-reducer';
import messageReducer from './message-reducer';
import usersReducer from './users-reducer';

let reducersBox = combineReducers({
  postItems: postReducer,
  messageItems: messageReducer,
  usersPage: usersReducer
});

let store = createStore(reducersBox);



export default store;

