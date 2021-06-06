import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
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
import { clearCurrentUser } from "../auth";
import "./Header.css";

// const Header = () => {
//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     if (JSON.parse(localStorage.getItem("token"))) {
//       setAuth(true);
//     } else {
//       setAuth(false);
//     }
//   });
//   return (
//     <nav>
//       <div className="header">
//         {/* <h1 class="logo">Fitness Tracker</h1> */}
//         <Link to={HOME_ROUTE}>Home</Link>
//         <Link to={ROUTINES_ROUTE}>Routines</Link>
//         <Link to={ACTIVITIES_ROUTE}>Activities</Link>
//         {auth && (
//           <>
//             <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
//           </>
//         )}
//         <div className="admin">
//           <Link to={REGISTER_ROUTE}>Register</Link>
//           <Link to={LOGIN_ROUTE}>Login</Link>
//           <Button id="logout-button" type="submit">
//             Logout
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Header = () => {
  const myToken = JSON.parse(localStorage.getItem("token"));
  const logOut = () => {
    if (!myToken) {
      window.location.href = "/home";
    } else {
      window.location.href = "/home";
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
          <Link to={REGISTER_ROUTE}>Register</Link>
          <Link to={LOGIN_ROUTE}>Login</Link>
          {}
        </div>
      </nav>
    );
  }
};

export default Header;
