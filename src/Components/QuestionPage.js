import React from "react";
import { connect } from "react-redux";
import QuestionToVote from "./QuestionToVote";
import QuestionVoted from "./QuestionVoted";
import ErrorNotFound from "./ErrorNotFound";

function QuestionPage(props) {
  return (
    <div>
      {!props.questionsIDS.includes(props.match.params.id) ? (
        <ErrorNotFound />
      ) : (
        <div>
          {props.hasVoted ? (
            <QuestionVoted id={props.match.params.id} />
          ) : (
            <QuestionToVote id={props.match.params.id} />
          )}
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ users, authedUser, questions }, { match }) {
  const questionId = match.params.id;
  const answeredQuestions = Object.keys(users[authedUser].answers);

  return {
    hasVoted: answeredQuestions.includes(questionId),
    questionsIDS: Object.keys(questions),
  };
}

export default connect(mapStateToProps)(QuestionPage);
