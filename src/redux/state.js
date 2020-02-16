let store = {
  _state: {
    dialogItem: [
      { id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
      { id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
      { id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
    ],
    newMessageText: 'send messages',
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
    if (action.type === 'NEW-MESSAGE') {
      let newPost = {
        id: 4,
        name: 'Stasik',
        lastMessage: this._state.newMessageText,
        date: '11 August'
      };
      this._state.dialogItem.push(newPost);
      this._state.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-MESSAGE') {
      this._state.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }

};

export default store;

window.store = store;