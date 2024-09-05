import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Origin from "../Origin.jsx";
import "./App.css";
import store from "../store/index.js";
import _ from "lodash";

export default function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Origin />
    </div>
  );
}
