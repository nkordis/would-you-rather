import React from "react";
import { connect } from "react-redux";

function LeaderBoard(props) {
  const { userName, avatarURL, answeredQuestions, createdQuestions } = props;

  return (
    <div className="leaderboard">
      <div className="leaderboard-user-info">
        <div className="leaderboard-username">
          <strong>{userName}</strong>
        </div>
        <img src={avatarURL} alt={`Avatar of ${userName}`} className="avatar" />
      </div>
      <div style={{ width: "250px" }} className="leaderbord-questions-number">
        <p>Answered Questions: {answeredQuestions}</p>
        <p>Created Questions: {createdQuestions}</p>
      </div>
      <div style={{ marginLeft: "100px" }} className="leaderboard-score">
        <p> Score: {answeredQuestions + createdQuestions}</p>
      </div>
    </div>
  );
}

function mapStateToProps({ users }, { userId }) {
  return {
    userName: users[userId].name,
    avatarURL: users[userId].avatarURL,
    answeredQuestions: Object.keys(users[userId].answers).length,
    createdQuestions: Object.keys(users[userId].questions).length,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
