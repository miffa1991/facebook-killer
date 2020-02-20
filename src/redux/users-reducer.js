const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFULLOW';
const SET_USERS = 'SET_USERS';

let initialState = { users: [] };

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
      return { ...state, users: [...state.users, ...action.users] } //рокриваемо масив і обєднуємо користувачів які в ньому є, з користувачами які прийшли. 

    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const usersAC = (users) => ({ type: SET_USERS, users});

export default usersReducer;

window.usersReducer = usersReducer;