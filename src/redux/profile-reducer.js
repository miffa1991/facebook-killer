import { userAPI } from "../API/api";

const NEW_POST = 'NEW-POST';
const UPDATE_POST = 'UPDATE-POST';
const PROFILE_PAGE = 'PROFILE_PAGE'; 

let postItems = {
  postItem: [
    { id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
    { id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
    { id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
  ],
  newPostText: '',
  profilePage: null,
  pageIdUser:2
};

const postReducer = (state = postItems, action) => {
  switch (action.type) {
    case UPDATE_POST:
      state.newPostText = action.newText;
      return {...state};
    case NEW_POST:
      let newPost = {
        id: 4,
        name: 'Stasik',
        lastMessage: state.newPostText,
        date: '11 August'
      };
      state.postItem.push(newPost);
      state.newPostText = '';
      return {...state};
    case PROFILE_PAGE:
      return { ...state, profilePage: action.profilePage };
    default:
      return {...state};
  }
}

export const newPost = () => ({ type: NEW_POST });

export const updatePost = (textPost) => {
  return { type: UPDATE_POST, newText: textPost };
}
export const pageProfile = (profilePage) => {
  return { type: PROFILE_PAGE, profilePage };
}

export const getProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then(data => {
      dispatch(pageProfile(data));
    });
  }
}

export default postReducer;