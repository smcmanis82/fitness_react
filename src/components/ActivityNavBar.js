import React from "react";
import "./ActivityNavBar.css";
import { CREATE_ACTIVITY_ROUTE } from "../constants";
import { Link } from "react-router-dom";

const ActivityNavBar = () => {
  return (
    <div id="navbar">
      <Link to={CREATE_ACTIVITY_ROUTE} className="btn-btn-primary">
        Create Activity
      </Link>
    </div>
  );
};

export default ActivityNavBar;
