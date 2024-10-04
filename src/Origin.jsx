import React from "react";
import "./Origin.css";
import Empty from "./components/Empty.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
export default function Origin({ user, activeUserId }) {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty activeUserId={activeUserId} user={activeUserId} />;
    }
    <ChatWindow activeUserId={activeUserId} />;
  };
  return <main className="Main">{renderMainContent()}</main>;
}
