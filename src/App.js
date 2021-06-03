import "./App.css";
import React, { useState } from "react";
import {
  Activities,
  Header,
  Routines,
  RoutineNavBar,
  ActivityNavBar,
  MyRoutines,
  Footer,
  Pages,
} from "./components";

import { getRoutines, getActivities } from "./api";

const App = () => {
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

      {/* <MyRoutines /> */}

      {/* <Activities /> */}

      {/* <Login /> */}

      {/* <Routines /> */}
      {/* <h1> My App!</h1> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
