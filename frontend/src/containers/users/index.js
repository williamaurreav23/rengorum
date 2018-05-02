import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchUsers
} from '../../api';
import UserList from '../../components/userlist';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  
  render() {
    return (
      <UserList {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading,
  users: state.users.users,
  error: state.users.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  }
});

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
