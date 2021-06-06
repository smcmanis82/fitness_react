import "./App.css";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Redirect, Route } from "react-router-dom";
import {
  Activities,
  Header,
  Routines,
  RoutineNavBar,
  ActivityNavBar,
  MyRoutines,
  Pages,
  CreateRoutine,
  CreateActivity,
} from "./components";
// import Pages from "./Pages";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "./constants";
import Register from "./components/Register";
import Login from "./components/Login";
import { getRoutines, getActivities } from "./api";

const App = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }),
    [];
  const [routines, setRoutines] = useState([
    {
      id: "",
      creatorId: "",
      isPublic: true,
      name: "",
      goal: "",
      creatorName: "",
      activities: [],
    },
  ]);

  const [activities, setActivities] = useState([
    { id: "", name: "", description: "" },
  ]);
  return (
    <div className="App">
      <Header />

      <Pages
        routines={routines}
        setRoutines={setRoutines}
        activities={activities}
        setActivities={setActivities}
      />

      <Route path={REGISTER_ROUTE}>
        <h1>Register</h1>
        <Register />
      </Route>
      <Route path={LOGIN_ROUTE}>
        <h1>Login</h1>
        <Login />
      </Route>

      {/* {auth && <MyRoutines />} */}
      {/* {!auth && <Redirect to={LOGIN_ROUTE} />} */}
      {/* {$auth && } */}
      {/* <Activities /> */}

      {/* <Login /> */}

      {/* <Routines /> */}
      {/* <h1> My App!</h1> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
