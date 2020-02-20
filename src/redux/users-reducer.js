const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFULLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_COUNT = 'SET_USER_COUNT';

let initialState = {
  users: [],
  pageUserCount: 0,
  pageLimit: 20,
  pageCurrent: 1
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
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const usersAC = (users) => ({ type: SET_USERS, users });

export const currentPageAC = (pageCurrent) => ({ type: SET_CURRENT_PAGE, pageCurrent });

export const userCountAC = (pageUserCount) => ({ type: SET_USER_COUNT, pageUserCount });


export default usersReducer;

window.usersReducer = usersReducer;