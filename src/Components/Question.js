import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    const { question, users } = this.props;

    const { author } = question;
    const avatarURL = users[author].avatarURL;
    const nameAuthor = users[author].name;
    const options = question.optionOne.text;

    return (
      <div className="question">
        <div className="question-author-info">
          <div className="question-author">
            <p>{nameAuthor} says:</p>
          </div>
          <img src={avatarURL} alt={`Avatar of ${author}`} className="avatar" />
        </div>
        <div className="question-intro">
          <p>Would you rather:</p>
          <p>...{options}...</p>

          <button
            onClick={() => this.props.history.push(`/question/${question.id}`)}
          >
            View Poll
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    users,
    question,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
