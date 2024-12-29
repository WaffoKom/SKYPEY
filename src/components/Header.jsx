import "./Header.css";
import PropTypes from "prop-types";

export default function Header({ user }) {
  const { name, status } = user;
  return (
    <header className="Header">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
