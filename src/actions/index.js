import { SET_ACTIVE_USER_ID } from "../constants/action-types.js";

export const setACtiveUserId = (user_id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: user_id,
});
