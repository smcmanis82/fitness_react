import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Header, Pages } from "./components";

import { LOGIN_ROUTE, REGISTER_ROUTE } from "./constants";
import Register from "./components/Register";
import Login from "./components/Login";

import "./App.css";

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
    </div>
  );
};

export default App;
