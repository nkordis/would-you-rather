import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  handleChange(e) {
    e.preventDefault();

    console.log("Logout clicked!");
  }
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboards" activeClassName="active">
              Leaderboards
            </NavLink>
          </li>
          {this.props.userName !== null ? (
            <ul>
              <li>Hello, {this.props.userName}</li>

              <li style={{ marginTop: "-50px" }}>
                <img
                  src={this.props.avatarURL}
                  alt="avatar"
                  className="avatar"
                />
              </li>
              <li>
                <div onClick={this.handleChange}>Logout</div>
              </li>
            </ul>
          ) : null}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    userName: authedUser !== null ? users[authedUser].name : null,
    avatarURL: authedUser !== null ? users[authedUser].avatarURL : null,
  };
}

export default connect(mapStateToProps)(Nav);
