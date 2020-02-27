import { userAPI, profileAPI } from "../API/api";

const NEW_POST = 'NEW-POST';
const UPDATE_POST = 'UPDATE-POST';
const PROFILE_PAGE = 'PROFILE_PAGE'; 
const STATUS_PROFILE = 'STATUS_PROFILE'; 
const STATUS_UPDATE_PROFILE = 'STATUS_UPDATE_PROFILE'; 

let postItems = {
  postItem: [
    { id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
    { id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
    { id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
  ],
  newPostText: '',
  profilePage: null,
  pageIdUser: 6084,
  status: ''
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
    case STATUS_PROFILE:
      return { ...state, status: action.status };
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

export const setStatus = (status) => {
  return { type: STATUS_PROFILE, status: status };
}


export const getProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then(data => {
      dispatch(pageProfile(data));
    });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
}





export default postReducer;