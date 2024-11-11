import React from "react";
import "./ChatWindow.css";
import store from "../store/index.js";
import Header from "./Header.jsx";

export default function ChatWindow({ activeUserId }) {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
    </div>
  );
}
