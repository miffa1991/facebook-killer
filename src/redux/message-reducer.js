const NEW_MESSAGE = 'NEW-MESSAGE';

let messageItems = {
  messageItem: [
    { id: 1, name: 'Rock William', lastMessage: 'REACT IT-Kamasutra', date: 'Today, 02.00PM' },
    { id: 2, name: 'Stasik William', lastMessage: 'VUE vs React epic battle', date: 'Today, 03.00PM' },
    { id: 3, name: 'Lola Lola', lastMessage: 'WordPress it is future', date: 'Today, 04.00PM' }
  ]
};

const messageReducer = (state = messageItems, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      let newMessage = {
        id: 4,
        name: 'Stasik',
        lastMessage: action.text,
        date: '11 August'
      };
      state.messageItem.push(newMessage);
      return {...state} ; //or ...state and other object ...
    default:
      return {...state};
  }
}

export const newMessageActionCreator = (text) => ({ type: NEW_MESSAGE, text });


export default messageReducer;