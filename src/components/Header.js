import React from "react";
import { Link } from "react-router-dom";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
  SIGNUP_ROUTE,
  SIGNIN_ROUTE,
  CREATE_ACTIVITY_ROUTE,
  CREATE_ROUTINE_ROUTE,
} from "../constants";

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div class="header">
        {/* <h1 class="logo">Fitness Tracker</h1> */}
        <Link to={HOME_ROUTE}>Home</Link>
        <Link to={ROUTINES_ROUTE}>Routines</Link>
        <Link to={ACTIVITIES_ROUTE}>Activities</Link>
        <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
        {/* <div class="sub-nav">
          <Link to={CREATE_ACTIVITY_ROUTE}>Create Activity</Link>
        </div> */}
        <dic class="admin">
          <Link to={SIGNUP_ROUTE}>Sign Up</Link>
          <Link to={SIGNIN_ROUTE}>Sign In</Link>
        </dic>
      </div>
    </nav>
  );
};

export default Header;
