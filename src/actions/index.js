import { SET_ACTIVE_USER_ID } from "../constants/action-types.js";

export const setACtiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});
