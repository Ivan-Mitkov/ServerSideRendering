import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions/index";

export class AdminsPage extends Component {
  componentDidMount() {
      this.props.fetchAdmins();
  }
  renderAdmins(){
  return this.props.admins.map(admin=><li key={admin.id}>{admin.name}</li>)
  }
  render() {
    return <div>
        <h3>Protected list of admins</h3>
        <ul>
            {this.renderAdmins()}
        </ul>
    </div>;
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsPage),
  loadData:({dispatch})=>dispatch(fetchAdmins())
};
