import { userAPI } from "./../API/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFULLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_COUNT = 'SET_USER_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_PROGRESS = 'TOGGLE_PROGRESS';


let initialState = {
	users: [],
	pageUserCount: 0,
	pageLimit: 8,
	pageCurrent: 1,
	isFetching: true,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {

		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}

		case SET_USERS:
			return { ...state, users: action.users } //рокриваемо масив і обєднуємо користувачів які в ньому є, з користувачами які прийшли. 

		case SET_CURRENT_PAGE:
			return { ...state, pageCurrent: action.pageCurrent }

		case SET_USER_COUNT:
			return { ...state, pageUserCount: action.pageUserCount }

		case TOGGLE_FETCHING:
			return { ...state, isFetching: action.isFetching }

		case TOGGLE_PROGRESS:
			return {
				...state, followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}


		default:
			return state;
	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const currentPage = (pageCurrent) => ({ type: SET_CURRENT_PAGE, pageCurrent });

export const setUserCount = (pageUserCount) => ({ type: SET_USER_COUNT, pageUserCount });

export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });

export const toggleProgressButton = (isFetching, userId) => ({ type: TOGGLE_PROGRESS, isFetching, userId });


export const getUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleFetching(true));
		const data = await userAPI.getUsers(currentPage, pageSize);
		dispatch(toggleFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setUserCount(data.totalCount));

	}
}

export const follow = (userId) => {
	return async (dispatch) => {
		dispatch(toggleProgressButton(true, userId));
		const response = await userAPI.getFollow(userId);
		if (response.data.resultCode === 0) {
			dispatch(followAC(userId));
		}
		dispatch(toggleProgressButton(false, userId));
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		dispatch(toggleProgressButton(true, userId));
		const response = await userAPI.getUnFollow(userId);
		if (response.data.resultCode === 0) {
			dispatch(unFollowAC(userId));
		}
		dispatch(toggleProgressButton(false, userId));
	}
}


export default usersReducer;