import "./Chats.css";
import PropTypes from "prop-types";
const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

const Chats = ({ messages }) => {
  return (
    <div className="Chats">
      {messages.map((message) => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
};

export default Chats;

Chat.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    is_user_msg: PropTypes.bool.isRequired,
  }).isRequired,
};

Chats.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      is_user_msg: PropTypes.bool.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
};
