import postReducer from './post-reducer';
import messageReducer from './message-reducer';

let store = {
  _state: {
    postItems: {
      postItem: [
        { id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
        { id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
        { id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
      ],
      newPostText: ''
    },
    messageItems: {
      messageItem: [
        { id: 1, name: 'Rock William', lastMessage: 'REACT IT-Kamasutra', date: 'Today, 02.00PM' },
        { id: 2, name: 'Stasik William', lastMessage: 'VUE vs React epic battle', date: 'Today, 03.00PM' },
        { id: 3, name: 'Lola Lola', lastMessage: 'WordPress it is future', date: 'Today, 04.00PM' }
      ],
      newMessageText: '',
    }
  },

  _callSubscriber() {
    console.log('store');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // патерн обсервер 
  },

  dispatch(action) {
    this._state.postItems = postReducer(this._state.postItems, action);
    this._state.messageItems = messageReducer(this._state.messageItems, action);
    this._callSubscriber(this._state);
  }
};



export default store;

window.store = store;