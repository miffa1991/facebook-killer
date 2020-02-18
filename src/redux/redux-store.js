import { createStore, combineReducers } from "redux";
import postReducer from './post-reducer';
import messageReducer from './message-reducer';

let reducersBox = combineReducers({
  postItems: postReducer,
  messageItems: messageReducer
});

let store = createStore(reducersBox);



export default store;

