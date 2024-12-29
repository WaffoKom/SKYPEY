import "./Chats.css";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

const Chats = ({ messages }) => {
  const chatRef = useRef(null);

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="Chats" ref={chatRef}>
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
