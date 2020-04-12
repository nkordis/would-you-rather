import React from "react";
import { connect } from "react-redux";

function QuestionVoted(props) {
  const {
    nameAuthor,
    avatarURL,
    author,
    optionA,
    optionB,
    totalVotes,
    votesOptionA,
    hasVotedOptionA,
  } = props;

  return (
    <div className="questions-results">
      <div className="question-author-info">
        <div className="question-author">
          <p>Asked by: {nameAuthor} </p>
        </div>
        <img src={avatarURL} alt={`Avatar of ${author}`} className="avatar" />
      </div>
      <div className="question-votes">
        <strong>Results:</strong>
        <br /> <br />
        <div
          style={{
            width: "280px",
            height: "100px",
            margin: "10px",
            border: "1px solid #c1c1c1",
          }}
          className="question-vote"
        >
          {optionA}
          <br />
          {(votesOptionA / totalVotes) * 100} %
          <br />
          {votesOptionA} out of {totalVotes} votes
          {hasVotedOptionA ? <div>You voted this option</div> : <div></div>}
        </div>
        <div
          style={{
            width: "280px",
            height: "100px",
            margin: "10px",
            border: "1px solid #c1c1c1",
          }}
          className="question-vote"
        >
          {optionB}
          <br />
          {((totalVotes - votesOptionA) / totalVotes) * 100} %
          <br />
          {totalVotes - votesOptionA} out of {totalVotes} votes
          {hasVotedOptionA ? <div></div> : <div>You voted this option</div>}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  return {
    avatarURL: users[questions[id].author].avatarURL,
    nameAuthor: users[questions[id].author].name,
    optionA: questions[id].optionOne.text,
    optionB: questions[id].optionTwo.text,
    totalVotes:
      questions[id].optionOne.votes.length +
      questions[id].optionTwo.votes.length,
    votesOptionA: questions[id].optionOne.votes.length,
    hasVotedOptionA: questions[id].optionOne.votes.includes(authedUser),
  };
}

export default connect(mapStateToProps)(QuestionVoted);
