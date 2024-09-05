import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contactjs";

export default combineReducers({
  user: user,
  contacts: contacts,
});
