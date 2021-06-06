import React, { useEffect, useState } from "react";

import { Route } from "react-router-dom";
import Routines from "./Routines";
import Home from "./Home";
import Activities from "./Activities";
import CreateRoutineForm from "./CreateRoutine";
import CreateActivityForm from "./CreateActivity";
// import Login from "./Login"
import Register from "./Register";

import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
  CREATE_ACTIVITY_ROUTE,
  CREATE_ROUTINE_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../constants";
import MyRoutines from "./MyRoutines";

const Pages = (props) => {
  const { routines, setRoutines, activities, setActivities } = props;
  return (
    <>
      <Route path={HOME_ROUTE}>
        <Home />
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <Routines routines={routines} setRoutines={setRoutines} />
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <h1>My Routine</h1>
        <MyRoutines />
      </Route>
      <Route path={CREATE_ROUTINE_ROUTE}>
        <>
          <h1>Create Routine</h1>
          <CreateRoutineForm />
        </>
      </Route>
      {
        <Route path={CREATE_ACTIVITY_ROUTE}>
          <>
            <h1>Create Activity</h1>
            <CreateActivityForm />
          </>
        </Route>
      }
      <Route path={ACTIVITIES_ROUTE}>
        <Activities activities={activities} setActivities={setActivities} />
      </Route>
      {/* <Route path={REGISTER_ROUTE}>
        <h1>Register</h1>
        <Register />
      </Route>
      <Route path={LOGIN_ROUTE}>
        <h1>Login</h1>
        <Login />
      </Route> */}
    </>
  );
};

export default Pages;
