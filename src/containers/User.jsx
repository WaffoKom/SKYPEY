import React from "react";
import "./User.css";

export default function User({ user }) {
  const { name, profile_pic, status } = user;
  return (
    <div className="User">
      <img src={profile_pic} alt={name} className="User_pic" />
      <div className="User_details">
        <p className="User_details_name">{name}</p>
        <p className="User_details_status">{status}</p>
      </div>
    </div>
  );
}
