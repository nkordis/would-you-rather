import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Nav from "./Nav";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Leaderboards from "./Leaderboards";
import ErrorNotFound from "./ErrorNotFound";

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
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/question/:id/" component={QuestionPage} />
                <Route path="/new" component={NewQuestion} />
                <Route path="/leaderboards" component={Leaderboards} />
                <Route component={ErrorNotFound} />
              </Switch>
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
