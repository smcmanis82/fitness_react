import React from "react";
import { CREATE_ACTIVITY_ROUTE } from "../constants";
import { Link } from "react-router-dom";
import "./ActivityNavBar.css";

const ActivityNavBar = () => {
  const myToken = JSON.parse(localStorage.getItem("token"));

  if (myToken) {
    return (
      <div id="navbar">
        <Link to={CREATE_ACTIVITY_ROUTE} className="btn-btn-primary">
          Create Activity
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ActivityNavBar;
