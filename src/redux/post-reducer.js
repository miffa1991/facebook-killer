const NEW_POST = 'NEW-POST';
const UPDATE_POST = 'UPDATE-POST';

let postItems = {
  postItem: [
    { id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
    { id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
    { id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
  ],
  newPostText: ''
};

const postReducer = (state = postItems, action) => {
  switch (action.type) {
    case UPDATE_POST:
      state.newPostText = action.newText;
      return Object.assign({}, state);
    case NEW_POST:
      let newPost = {
        id: 4,
        name: 'Stasik',
        lastMessage: state.newPostText,
        date: '11 August'
      };
      state.postItem.push(newPost);
      state.newPostText = '';
      return Object.assign({}, state);

    default:
      return Object.assign({}, state);
  }
}

export const newPostActionCreator = () => ({ type: NEW_POST });

export const updatePostActionCreator = (textPost) => {
  return { type: UPDATE_POST, newText: textPost };
}

export default postReducer;