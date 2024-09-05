import { generateUser } from "../static-data.js";

export default function user(state = generateUser(), action) {
  return state;
}
