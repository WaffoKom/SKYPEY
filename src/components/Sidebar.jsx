import React from "react";
import "./Sidebar.css";
import User from "../containers/User.jsx";

export default function Sidebar({ contacts }) {
  return (
    <aside className="Sidebar">
      {contacts.map((contact) => (
        <User key={contact.user_id} user={contact} />
      ))}
    </aside>
  );
}
