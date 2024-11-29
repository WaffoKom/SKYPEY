import "./MessageInput.css";

import store from "../store/index.js";
import { sendMessage, setTypingValue } from "../actions";

export default function MessageInput({ value }) {
  const state = store.getState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
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
