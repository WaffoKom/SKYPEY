import "./MessageInput.css";

import store from "../store/index.js";
import { sendMessage, setTypingValue } from "../actions";
import PropTypes from "prop-types";

export default function MessageInput({ value }) {
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const state = store.getState();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="Write a message"
      />
    </form>
  );
}

MessageInput.propTypes = {
  value: PropTypes.string.isRequired,
};
