import React from "react";
import { CREATE_ROUTINE_ROUTE } from "../constants";
import { Link } from "react-router-dom";
import "./RoutineNavBar.css";

const RoutineNavBar = () => {
  return (
    <div id="navbar">
      <Link to={CREATE_ROUTINE_ROUTE} className="btn-btn-primary">
        Create Routine
      </Link>
    </div>
  );
};

export default RoutineNavBar;
