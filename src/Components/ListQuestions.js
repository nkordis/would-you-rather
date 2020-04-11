import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

function ListQuestions(props) {
  const listToShow = props.isUnasweredList
    ? props.unAnsweredQuestionsIds
    : props.answeredQuestionsIds;

  return (
    <div>
      <ul className="dashboard-list">
        {listToShow.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  const answeredQuestions = Object.keys(users[authedUser].answers);

  const unAnsweredQuestions = Object.keys(questions).filter(function (item) {
    return !answeredQuestions.includes(item);
  });

  return {
    unAnsweredQuestionsIds: unAnsweredQuestions,
    answeredQuestionsIds: answeredQuestions,
  };
}

export default connect(mapStateToProps)(ListQuestions);
