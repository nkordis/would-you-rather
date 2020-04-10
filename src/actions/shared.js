import { getInitialData } from "../utils/api";
import { setAuthedUser } from "../actions/authedUser";

//const AUTHED_ID = "tylermcginnis";

export function handleInitialData(AUTHED_ID) {
  return (dispatch) => {
    return getInitialData().then(() => {
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
