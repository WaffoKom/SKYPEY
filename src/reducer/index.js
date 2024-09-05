import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contactjs";
import activeUserId from "./activeUserId";

export default combineReducers({
  user,
  contacts,
  activeUserId,
});
