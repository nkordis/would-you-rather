import React, { Component } from "react";
import { connect } from "react-redux";
import { handleVoteQuestion } from "../actions/questions";

class QuestionToVote extends Component {
  state = {
    selectedOption: "optionOne",
  };

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  handleVoteSumbit = (e) => {
    e.preventDefault(e);

    const { dispatch, authedUser, id } = this.props;

    dispatch(
      handleVoteQuestion({
        authedUser,
        qid: id,
        answer: this.state.selectedOption,
      })
    );
  };

  render() {
    const { nameAuthor, avatarURL, author, optionOne, optionTwo } = this.props;

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
              value="optionOne"
              checked={this.state.selectedOption === "optionOne"}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="optionOne">{optionOne}</label>
            <br />
            <input
              type="radio"
              value="optionTwo"
              checked={this.state.selectedOption === "optionTwo"}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="optionTwo">{optionTwo}</label>
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
    optionOne: questions[id].optionOne.text,
    optionTwo: questions[id].optionTwo.text,
  };
}

export default connect(mapStateToProps)(QuestionToVote);
