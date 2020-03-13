import React from 'react';
import { follow, unfollow, currentPage,toggleProgressButton, getUsers } from './../../../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../../../common/Preloader/Preloader';
import { withAuthRedirect } from '../../../../hoc/withAutHogRedirect';
import { compose } from 'redux';



class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  changeCurrentPage = (pageNumber) => {
  
    this.props.currentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  
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



export default compose(
  //withAuthRedirect,
  connect(mapStateToProps, {
    follow, unfollow, currentPage, toggleProgressButton, getUsers
  })
)(UsersAPIComponent);

