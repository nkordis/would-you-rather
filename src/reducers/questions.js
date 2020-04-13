import {
  RECEIVE_QUESTIONS,
  VOTE_QUESTION,
  UNDO_VOTE_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case VOTE_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
            text: state[action.qid][action.answer].text,
          },
        },
      };
    case UNDO_VOTE_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            votes: state[action.qid][action.answer].votes.filter(
              (uid) => uid !== action.authedUser
            ),
            text: state[action.qid][action.answer].text,
          },
        },
      };
    default:
      return state;
  }
}
