import { getMessages } from "../static-data.js";
import { SEND_MESSAGE } from "../constants/action-types.js";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { message, userId } = action.payload;
      // const AllUserMsgs = state[userId] || {};
      const AllUserMsgs = state[userId];
      // const keys = Object.keys(AllUserMsgs);
      // const number = keys.length > 0 ? parseInt(keys.pop()) + 1 : 1;
      const number = +_.keys(AllUserMsgs).pop() + 1;
      print(number);
      return {
        ...state,
        [userId]: {
          ...AllUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true,
          },
        },
      };
    }
    default:
      return state;
  }
}
