import "./ChatWindow.css";
import store from "../store/index.js";
import Header from "../components/Header.jsx";
import Chats from "../components/Chats.jsx";
import MessageInput from "./MessageInput.jsx";
import _ from "lodash";

export default function ChatWindow({ activeUserId }) {
  const state = store.getState();
  const { typing } = state;
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats
        messages={_.values(activeMsgs).filter((m) => {
          return m.text.length !== 0;
        })}
      />
      <MessageInput value={typing} />
    </div>
  );
}
