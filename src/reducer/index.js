import { combineReducers } from "redux";
import user from "./user.js";
import contacts from "./contacts.js";
import activeUserId from "./activeUserId.js";
import messages from "./messages.js";
import typing from "./typing.js";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing,
});
