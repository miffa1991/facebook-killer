const NEW_MESSAGE = 'NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let messageItems = {
  messageItem: [
    { id: 1, name: 'Rock William', lastMessage: 'REACT IT-Kamasutra', date: 'Today, 02.00PM' },
    { id: 2, name: 'Stasik William', lastMessage: 'VUE vs React epic battle', date: 'Today, 03.00PM' },
    { id: 3, name: 'Lola Lola', lastMessage: 'WordPress it is future', date: 'Today, 04.00PM' }
  ],
  newMessageText: '',
};

const messageReducer = (state = messageItems, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      state.newMessageText = action.newText;
      return Object.assign({}, state);
    case NEW_MESSAGE:
      let newMessage = {
        id: 4,
        name: 'Stasik',
        lastMessage: state.newMessageText,
        date: '11 August'
      };
      state.messageItem.push(newMessage);
      state.newMessageText = '';
      return Object.assign({}, state);
    default:
      return Object.assign({}, state);
  }
}

export const newMessageActionCreator = () => ({ type: NEW_MESSAGE });

export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_MESSAGE, newText: text };
}


export default messageReducer;