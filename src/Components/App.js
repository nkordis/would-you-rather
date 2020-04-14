import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Nav from "./Nav";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Leaderboards from "./Leaderboards";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Would You Rather</h1>
          <Nav />
          {this.props.authedUser === null ? (
            <SignIn />
          ) : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/question/:id" component={QuestionPage} />
              <Route path="/new" component={NewQuestion} />
              <Route path="/leaderboards" component={Leaderboards} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
