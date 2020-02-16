import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import { newMessage, updateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} newMessage={newMessage} updateNewPostText={updateNewPostText} />
    </BrowserRouter>, document.getElementById('root'));
}