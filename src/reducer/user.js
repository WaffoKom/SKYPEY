import { generateUser, state } from "../static-data.js";

export default function user(state = generateUser(), action) {
  return state;
}
