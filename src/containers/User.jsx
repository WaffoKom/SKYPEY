import "./User.css";
import store from "../store/index.js";
import { setACtiveUserId } from "../actions/index.js";
import PropTypes from "prop-types";

export default function User({ user }) {
  const { name, profile_pic, status } = user;

  return (
    <div className="User" onClick={handleClickUser.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User_pic" />
      <div className="User_details">
        <p className="User_details_name">{name}</p>
        <p className="User_details_status">{status}</p>
      </div>
    </div>
  );
}
function handleClickUser({ user_id }) {
  console.log(user_id);
  store.dispatch(setACtiveUserId(user_id));
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_pic: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
