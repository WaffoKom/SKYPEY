import { getMessages } from "../static-data.js";

export default function messages(state = getMessages(10), action) {
  return state;
}
