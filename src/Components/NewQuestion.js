import React, { Component } from "react";

class NewQuestion extends Component {
  handleVoteSumbit(e) {
    alert("it works!");
    e.preventDefault();
  }

  render() {
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
            /*value=""*/
            onChange={this.handleChange}
            className="textarea"
            maxLength={50}
          />
          <textarea
            placeholder="Enter Option Two Text Here"
            /*value=""*/
            onChange={this.handleChange}
            className="textarea"
            maxLength={50}
          />
          <button className="btn" type="submit" /*disabled={text === ""}*/>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewQuestion;
