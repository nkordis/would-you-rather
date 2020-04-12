import React from "react";
import { connect } from "react-redux";
import QuestionToVote from "./QuestionToVote";
import QuestionVoted from "./QuestionVoted";

function QuestionPage(props) {
  return (
    <div>
      {props.hasVoted ? (
        <QuestionVoted id={props.match.params.id} />
      ) : (
        <QuestionToVote id={props.match.params.id} />
      )}
    </div>
  );
}

function mapStateToProps({ users, authedUser }, { match }) {
  const questionId = match.params.id;
  const answeredQuestions = Object.keys(users[authedUser].answers);

  return {
    hasVoted: answeredQuestions.includes(questionId),
  };
}

export default connect(mapStateToProps)(QuestionPage);
