import React, { Component } from "react";
import { connect } from "react-redux";
import {Helmet} from 'react-helmet'
import { fetchUsers } from "../actions/index";

const Users = props => {
// console.log('Users props', props)
  let resultingUsers = [];
  if (Array.isArray(props.users)) {
    // console.log('Users props', props.users)

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

  head(){
    return(
      <Helmet>
      <title>{`${this.props.users.length} Users list`}</title>
      <meta property="og:title" content='Users Page'></meta>
    </Helmet>
    )
  }

  render() {
    // console.log("render: ", this.props.users);
    const { users } = this.props;
    return (
      <div>
       {this.head()}
        <div> Users list</div>
        <ul>
          <Users users={users} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => {
    // console.log("map state to props state users: ", users);
  return {users};
};

 const loadData = store => {
  // console.log("I'm trying to load some data")
  //!!!!!when we are in this route manually dispatching action 
  //in order to get data before rendering component
  //this return a promise wich is send to index.js
  return store.dispatch(fetchUsers());
};
export default {
  loadData,
  component:connect(mapStateToProps, { fetchUsers })(UsersList)
};
