import React from "react";
import { Route } from "react-router-dom";
import Routines from "./Routines";
import Activities from "./Activities";

import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
  CREATE_ACTIVITY_ROUTE,
} from "../constants";
import MyRoutines from "./MyRoutines";

const Pages = (props) => {
  const { routines, setRoutines, activities, setActivities } = props;
  return (
    <>
      <Route path={HOME_ROUTE}>
        <h1>Home Page</h1>
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <Routines routines={routines} setRoutines={setRoutines} />
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <h1>My Routine</h1>
        <MyRoutines />
      </Route>
      <Route path={ACTIVITIES_ROUTE}>
        <Activities activities={activities} setActivities={setActivities} />
      </Route>
    </>
  );
};

export default Pages;
