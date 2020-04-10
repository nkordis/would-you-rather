import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export function handleInitialData(AUTHED_ID) {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
