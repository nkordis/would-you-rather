import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleInitialData(this.state.tempSelected));
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ tempSelected: e.target.value });
  };

  render() {
    return (
      <div className="SignIn">
        <h3>Welcome to the Would You Rather App!</h3>
        <p>Please sign in to continue</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p style={{ color: "#c1c1c1" }}>Sign in</p>
            <select
              value={this.state.tempSelected}
              defaultValue="defaultV"
              onChange={this.handleChange}
            >
              <option disabled value="defaultV">
                -- Select User --
              </option>
              <option value="sarahedot">Sarah Edo</option>
              <option value="tylermcginnis">Tyler McGinnis</option>
              <option value="johndoe">John Doe</option>
            </select>
          </label>
          <input type="submit" value="Sign in" />
        </form>
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
