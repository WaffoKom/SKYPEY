import "./Origin.css";
import Empty from "./components/Empty.jsx";
import ChatWindow from "./containers/ChatWindow.jsx";
export default function Origin({ user, activeUserId }) {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty activeUserId={activeUserId} user={user} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
}
