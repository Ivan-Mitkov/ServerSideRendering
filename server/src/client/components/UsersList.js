import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";

const Users = props => {
//   console.log("Users", props.users);
  let resultingUsers = [];
  if (Array.isArray(props.users)) {
    resultingUsers = props.users.map(user => {
        // console.log(user)
      return <li key={user.id}>{user.name}</li>;
    });
  }
//   console.log('users to print:',resultingUsers)
  return resultingUsers;
};

export class UsersList extends Component {
  componentDidMount() {
    // console.log("this.props usersList", this.props);
    this.props.fetchUsers();
  }

  render() {
    // console.log("render: ", this.props.users);
   const {users}=this.props
    return (
      <div>
        <div>Users list</div>
        <ul>
          <Users users={users} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
//   console.log("map state to props state: ", state);
  return { users: state };
};
export default connect(mapStateToProps, { fetchUsers })(UsersList);
