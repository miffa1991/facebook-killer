import React from 'react';
import { followAC, unFollowAC, usersAC, currentPageAC, userCountAC } from './../../../../redux/users-reducer';
import Users from './Users';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users, //usersPage - ключ редюсера який ми вказали в redux-store.js
    pageLimit: state.usersPage.pageLimit,
    pageUserCount:state.usersPage.pageUserCount,
    pageCurrent:state.usersPage.pageCurrent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unFollowAC(userId)) },
    setUsers: (users) => { dispatch(usersAC(users))},
    currentPage: (pageCurrent) => {dispatch(currentPageAC(pageCurrent))},
    setUserCount: (pageUserCount) => { dispatch(userCountAC(pageUserCount)) }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;