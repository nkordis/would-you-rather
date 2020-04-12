import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionToVote extends Component {
  handleVoteSumbit(e) {
    alert("it works!");
    e.preventDefault();
  }

  render() {
    const { nameAuthor, avatarURL, author, optionA, optionB } = this.props;

    return (
      <div className="question">
        <div className="question-author-info">
          <div className="question-author">
            <p>{nameAuthor} asks:</p>
          </div>
          <img src={avatarURL} alt={`Avatar of ${author}`} className="avatar" />
        </div>
        <div className="question-intro">
          <p>Would you rather:</p>
          <form onSubmit={this.handleVoteSumbit}>
            <input
              type="radio"
              id="optionA"
              name="vote-options"
              value="optionA"
              defaultChecked
            />
            <label htmlFor="optionA">{optionA}</label>
            <br />
            <input
              type="radio"
              id="optionB"
              name="vote-options"
              value="optionB"
            />
            <label htmlFor="optionB">{optionB}</label>
            <br />
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  return {
    authedUser,
    avatarURL: users[questions[id].author].avatarURL,
    nameAuthor: users[questions[id].author].name,
    optionA: questions[id].optionOne.text,
    optionB: questions[id].optionTwo.text,
  };
}

export default connect(mapStateToProps)(QuestionToVote);
