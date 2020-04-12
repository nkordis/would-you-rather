import React, { Component } from "react";
import { connect } from "react-redux";
import ListQuestions from "./ListQuestions";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unansweredQuestions: true,
    };
  }

  handleClickUnanswered = () => {
    if (this.state !== true) {
      this.setState({
        unansweredQuestions: true,
      });
    }
  };

  handleClickAnswered = () => {
    if (this.state !== false) {
      this.setState({
        unansweredQuestions: false,
      });
    }
  };

  render() {
    console.log(this.state.unansweredQuestions);
    return (
      <div>
        <div className="choose-list-questions">
          <button onClick={this.handleClickUnanswered}>
            Unaswered Questions
          </button>
          <button onClick={this.handleClickAnswered}>Answered Questions</button>
        </div>
        <ListQuestions isUnasweredList={this.state.unansweredQuestions} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
