import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button
          onClick={() =>
            this.props.dispatch(handleInitialData("tylermcginnis"))
          }
        >
          Sign In
        </button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  };
}

export default connect(mapStateToProps)(SignIn);
//export default SignIn;
