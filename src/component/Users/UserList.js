import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup,Button,Table } from "react-bootstrap";
import {
  changeUser,
  fetchUsers,
  deleteUser,
} from "../../store/actions/userActions";

import { Link } from "react-router-dom";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  selectUser = (user) => {
    this.props.changeUser(user);
  };
  render() {
    return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Surname</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    
  
  {this.props.users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>@{user.username}</td>
                  </tr>
              ))}
  </tbody>
</Table>

    );
  }
}

const mapStateToProps = (state) => ({
    users: state.userReducer.users,
  currentUser: state.userReducer.currentUser
});

const mapDispatchToProps = {
    changeUser,
    fetchUsers,
    deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);