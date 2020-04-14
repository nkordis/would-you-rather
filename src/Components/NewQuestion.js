import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  handleChange1 = (e) => {
    const optionOneText = e.target.value;

    this.setState(() => ({
      optionOneText,
      optionTwoText: this.state.optionTwoText,
    }));
  };

  handleChange2 = (e) => {
    const optionTwoText = e.target.value;
    this.setState(() => ({
      optionOneText: this.state.optionOneText,
      optionTwoText,
    }));
  };

  handleVoteSumbit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUser } = this.props;

    dispatch(
      handleAddQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser,
      })
    );

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Create New Question</h1>
        <p>Complete the question:</p>
        <p>
          <strong>Wou you rather ...</strong>
        </p>
        <form onSubmit={this.handleVoteSumbit}>
          <textarea
            placeholder="Enter Option One Text Here"
            value={optionOneText}
            onChange={this.handleChange1}
            className="textarea"
            maxLength={50}
          />
          <p>
            <strong>OR</strong>
          </p>
          <textarea
            placeholder="Enter Option Two Text Here"
            value={optionTwoText}
            onChange={this.handleChange2}
            className="textarea"
            maxLength={50}
          />
          <button
            className="btn"
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
