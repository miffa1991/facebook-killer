import React from 'react';
import { followAC, unFollowAC, usersAC } from './../../../../redux/users-reducer';
import Users from './Users';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users //usersPage - ключ редюсера який ми вказали в redux-store.js
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unFollowAC(userId)) },
    setUsers: (users) => { dispatch(usersAC(users))}
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;