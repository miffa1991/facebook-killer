import { userAPI, profileAPI } from "../API/api";

const NEW_POST = 'NEW-POST';
const PROFILE_PAGE = 'PROFILE_PAGE';
const STATUS_PROFILE = 'STATUS_PROFILE';
const DELETE_POST = 'DELETE_POST';


let postItems = {
	postItem: [
		{ id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
		{ id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
		{ id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
	],
	profilePage: null,
	status: ''
};


const postReducer = (state = postItems, action) => {
	switch (action.type) {
		case NEW_POST:
			let newPost = {
				id: 4,
				name: 'Stasik',
				lastMessage: action.newPostText,
				date: '11 August'
			};
			// state.postItem.push(newPost);
			return { ...state, postItem: [...state.postItem, newPost], newPostText: '' };
		case PROFILE_PAGE:
			return { ...state, profilePage: action.profilePage };
		case DELETE_POST:
			return { ...state, postItem: state.postItem.filter(p => p.id != action.postId) };

		case STATUS_PROFILE:
			return { ...state, status: action.status };
		default:
			return { ...state };
	}
}


export const newPost = (newPostText) => ({ type: NEW_POST, newPostText });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });


export const pageProfile = (profilePage) => {
	return { type: PROFILE_PAGE, profilePage };
}


export const setStatus = (status) => {
	return { type: STATUS_PROFILE, status: status };
}


export const getProfile = (userId) => async (dispatch) => {
	const data = await userAPI.getProfile(userId);
	dispatch(pageProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
	const data = await profileAPI.getStatus(userId);
	dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export default postReducer;