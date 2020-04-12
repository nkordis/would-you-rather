import React from "react";
import { connect } from "react-redux";
import LeaderBoard from "./LeaderBoard";

function LeaderBoards(props) {
  const { usersListSorted } = props;

  return (
    <div>
      <ul className="leaderboards">
        {usersListSorted.map((id) => (
          <li key={id}>
            <LeaderBoard userId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    usersListSorted: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        Object.keys(users[b].questions).length -
        (Object.keys(users[a].answers).length +
          Object.keys(users[a].answers).length)
    ),
  };
}

export default connect(mapStateToProps)(LeaderBoards);
