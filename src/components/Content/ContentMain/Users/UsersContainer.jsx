import React from 'react';
import { follow, unfollow, setUsers, currentPage, setUserCount, toggleFetching, toggleProgressButton } from './../../../../redux/users-reducer';
import Users from './Users';
import { connect } from "react-redux";
import Preloader from '../../../common/Preloader/Preloader';
import { userAPI } from '../../../../API/api';


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.toggleFetching(true);
    userAPI.getUsers(this.props.pageCurrent, this.props.pageLimit).then(data => {
     // debugger
      this.props.setUsers(data.items);
      this.props.setUserCount(data.totalCount);
      this.props.toggleFetching(false);
    });

  }

  changeCurrentPage = (pageNumber) => {
    this.props.currentPage(pageNumber);
    this.props.toggleFetching(true);
    userAPI.getUsers(this.props.pageCurrent, this.props.pageLimit).then(data => {
      this.props.setUsers(data.items);
      this.props.toggleFetching(false);
    });
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users pageUserCount={this.props.pageUserCount} pageLimit={this.props.pageLimit} pageCurrent={this.props.pageCurrent} users={this.props.users} changeCurrentPage={this.changeCurrentPage} unfollow={this.props.unfollow}
        follow={this.props.follow} followingInProgress={this.props.followingInProgress} toggleProgressButton={this.props.toggleProgressButton} />
    </>
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users, //usersPage - ключ редюсера який ми вказали в redux-store.js
    pageLimit: state.usersPage.pageLimit,
    pageUserCount: state.usersPage.pageUserCount,
    pageCurrent: state.usersPage.pageCurrent,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow, unfollow, setUsers, currentPage, setUserCount, toggleFetching, toggleProgressButton
})(UsersAPIComponent);

export default UsersContainer;