const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFULLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    { id: 1, followed: true,
      avatar:'https://www.vokrug.tv/pic/person/f/5/e/0/f5e03a3a3a3d0d1ac9b655943a318aae.jpeg',
       name: 'Rock William',  location: { country: 'Ukraine', town: 'Kiev' } },
    { id: 2, followed: false,
       avatar:'https://www.vokrug.tv/pic/person/f/5/e/0/f5e03a3a3a3d0d1ac9b655943a318aae.jpeg',
     name: 'Stasik William',  location: { country: 'Russia', town: 'Moscow' } },
    { id: 3, followed: true,
       avatar:'https://www.vokrug.tv/pic/person/f/5/e/0/f5e03a3a3a3d0d1ac9b655943a318aae.jpeg',
     name: 'Lola Lola',  location: { country: 'Ukraine', town: 'Kiev' } }
  ]
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