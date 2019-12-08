import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  console.log("props", auth);
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <div style={{margin:'0',padding:'18px',width:'100%',display:'flex',justifyContent:'space-evenly',border:'2px solid #eee'}}>
      <div style={{flexGrow:'3'}}>
        <Link to="/">SSR</Link>
      </div>
      <div style={{marginRight:'20px',flexGrow:'1',display:'flex',justifyContent:'space-between' }}>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
//   console.log("state", auth);
  return { auth };
}

export default connect(mapStateToProps)(Header);
