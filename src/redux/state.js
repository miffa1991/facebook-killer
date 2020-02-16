import { rerenderEntireTree } from "../render";

let state = {
  dialogItem: [
    { id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
    { id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
    { id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
  ],
  newMessageText: 'send messages',
};

window.state = state;

export let newMessage = () => {
  let newPost = {
    id: 4,
    name: 'Stasik',
    lastMessage: state.newMessageText,
    date: '11 August'
  };
  state.dialogItem.push(newPost);
  state.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.newMessageText = newText;
  rerenderEntireTree(state);
}


export default state;