import React from "react";
import "./User.css";
import store from "../store/index.js";
import { setACtiveUserId } from "../actions/index.js";

export default function User({ user }) {
  function handleClickUser({ user_id }) {
    console.log(user_id);

    store.dispatch(setACtiveUserId(user_id));
  }
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
