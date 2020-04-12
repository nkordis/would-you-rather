import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Question(props) {
  const { avatarURL, nameAuthor, author, optionA, questionId, history } = props;

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
        <p>...{optionA}...</p>

        <button onClick={() => history.push(`/question/${questionId}`)}>
          View Poll
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users }, { questionId }) {
  return {
    author: questions[questionId].author,
    nameAuthor: users[questions[questionId].author].name,
    avatarURL: users[questions[questionId].author].avatarURL,
    optionA: questions[questionId].optionOne.text,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
