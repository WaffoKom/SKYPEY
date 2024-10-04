import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Origin from "../Origin.jsx";
import store from "../store/index.js";
import _ from "lodash";
import "./App.css";

export default function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Origin user={user} activeUserId={activeUserId} />
    </div>
  );
}
