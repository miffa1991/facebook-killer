import React from 'react';
import { followAC, unFollowAC, usersAC, currentPageAC, userCountAC } from './../../../../redux/users-reducer';
import Users from './Users';
import { connect } from "react-redux";
import * as axios from 'axios';


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageCurrent}&count=${this.props.pageLimit}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setUserCount(response.data.totalCount);
    });
    //this.props.pageUserCount = totalCount;
  }
  changeCurrentPage = (pageNumber) => {
    this.props.currentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageLimit}`).then(response => {
      this.props.setUsers(response.data.items);


    });
  }
  render() {
    return <Users pageUserCount={this.props.pageUserCount} pageLimit={this.props.pageLimit} pageCurrent={this.props.pageCurrent} users={this.props.users} changeCurrentPage={this.changeCurrentPage} unfollow ={this.props.unfollow}
      follow={this.props.follow}/>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users, //usersPage - ключ редюсера який ми вказали в redux-store.js
    pageLimit: state.usersPage.pageLimit,
    pageUserCount: state.usersPage.pageUserCount,
    pageCurrent: state.usersPage.pageCurrent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unFollowAC(userId)) },
    setUsers: (users) => { dispatch(usersAC(users)) },
    currentPage: (pageCurrent) => { dispatch(currentPageAC(pageCurrent)) },
    setUserCount: (pageUserCount) => { dispatch(userCountAC(pageUserCount)) }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;