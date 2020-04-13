import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const UNDO_VOTE_QUESTION = "UNDO_VOTE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function voteQuestion({ authedUser, qid, answer }) {
  return {
    type: VOTE_QUESTION,
    authedUser,
    qid,
    answer,
  };
}
/**
 * the function will be called only in a db failure
 * @param {} param0
 */
function undoVoteQuestion({ authedUser, qid, answer }) {
  return {
    type: UNDO_VOTE_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleVoteQuestion(info) {
  return (dispatch) => {
    dispatch(voteQuestion(info));
    return saveQuestionAnswer(info).catch((e) => {
      console.warn("handleVoteQuestion: ", e);
      dispatch(undoVoteQuestion(info));
      alert("The was an error voting the question. Try again.");
    });
  };
}
