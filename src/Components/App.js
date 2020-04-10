import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Would You Rather</h1>
        {this.props.authedUser === null ? <SignIn /> : <Dashboard />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
