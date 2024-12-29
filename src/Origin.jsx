import "./Origin.css";
import Empty from "./components/Empty.jsx";
import ChatWindow from "./containers/ChatWindow.jsx";
import PropTypes from "prop-types";
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

Origin.propTypes = {
  user: PropTypes.object.isRequired,
  activeUserId: PropTypes.string,
};
