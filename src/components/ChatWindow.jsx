import React from "react";
import "./ChatWindow.css";

export default function ChatWindow({ activeUserId }) {
  return (
    <div className="ChatWindow">
      Conversation for user id:
      {activeUserId}
    </div>
  );
}
