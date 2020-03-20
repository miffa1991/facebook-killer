import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postReducer from './profile-reducer';
import messageReducer from './message-reducer';
import usersReducer from './users-reducer';
import loginReducer from './login-reducer';
import app from './app-reducer';
import { reducer as formReducer } from 'redux-form'

let reducersBox = combineReducers({
	postItems: postReducer,
	messageItems: messageReducer,
	usersPage: usersReducer,
	loginReducer: loginReducer,
	app: app,
	form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//настройка расширения для хрома

const store = createStore(reducersBox, composeEnhancers(
	applyMiddleware(thunkMiddleware))
);




window.store = store;
export default store;

