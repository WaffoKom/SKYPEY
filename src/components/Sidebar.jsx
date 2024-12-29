import "./Sidebar.css";
import User from "../containers/User.jsx";
import PropTypes from "prop-types";

export default function Sidebar({ contacts }) {
  return (
    <aside className="Sidebar">
      {contacts.map((contact) => (
        <User key={contact.user_id} user={contact} />
      ))}
    </aside>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.array.isRequired,
};
