import React from "react";
import { Link } from "react-router-dom";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  CREATE_ACTIVITY_ROUTE,
  CREATE_ROUTINE_ROUTE,
} from "../constants";
import "./Header.css";

const Header = () => {
  const myToken = JSON.parse(localStorage.getItem("token"));
  const logOut = () => {
    if (!myToken) {
      window.location.href = `${HOME_ROUTE}`;
    } else {
      window.location.href = `${HOME_ROUTE}`;
    }
  };
  if (myToken) {
    return (
      <nav>
        <div className="loggedIn">
          <Link to={HOME_ROUTE}>Home</Link>
          <Link to={ROUTINES_ROUTE}>Routines</Link>
          <Link to={ACTIVITIES_ROUTE}>Activities</Link>
          <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
          <Link to={CREATE_ROUTINE_ROUTE}></Link>
          <Link to={CREATE_ACTIVITY_ROUTE}></Link>

          <Link
            to={HOME_ROUTE}
            id="logout-button"
            onClick={() => {
              localStorage.clear("token");
              logOut();
            }}
          >
            Logout
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="loggedOut">
          <Link to={HOME_ROUTE}>Home</Link>
          <Link to={ROUTINES_ROUTE}>Routines</Link>
          <Link to={ACTIVITIES_ROUTE}>Activities</Link>
          <Link to={REGISTER_ROUTE} id="admin">
            Register
          </Link>
          <Link to={LOGIN_ROUTE} id="admin">
            Login
          </Link>
          {}
        </div>
      </nav>
    );
  }
};

export default Header;
