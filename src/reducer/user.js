import { generateUser } from "../static-data.js";

export default function user(state = generateUser()) {
  return state;
}
