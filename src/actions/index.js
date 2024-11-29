import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
} from "../constants/action-types.js";

export const setACtiveUserId = (user_id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: user_id,
});

export const setTypingValue = (value) => ({
  type: SET_TYPING_VALUE,
  payload: value,
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
  },
});
