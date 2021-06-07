import React from "react";
import { Route } from "react-router-dom";
import Activities from "./Activities";
import CreateActivityForm from "./CreateActivity";
import CreateRoutineForm from "./CreateRoutine";
import Home from "./Home";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import {
  ACTIVITIES_ROUTE,
  CREATE_ACTIVITY_ROUTE,
  CREATE_ROUTINE_ROUTE,
  HOME_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
} from "../constants";

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
        <h1>My Routines</h1>
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
    </>
  );
};

export default Pages;
