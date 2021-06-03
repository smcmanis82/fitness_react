import React, { useEffect } from "react";
import { getRoutines } from "../api";
import "./Routines.css";

const Routines = ({ routines, setRoutines }) => {
  useEffect(() => {
    getRoutines()
      .then((routine) => {
        setRoutines(routine);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      <div className="page-head">
        <h1>Routines</h1>
      </div>
      <div id="routines-container">
        {routines.map((routine) => (
          <div key={routine.id} className="routine-cards">
            {createRoutineHTML(routine)}
          </div>
        ))}
      </div>
    </>
  );
};

const createRoutineHTML = (routine) => {
  return (
    <div className="routine-card">
      <div className="card-name">
        Routine:<p>{routine.name}</p>
      </div>
      <div className="card-creator">
        Creator: <p>{routine.creatorName}</p>
      </div>
      <div className="card-count">
        Count: <p>{routine.count}</p>
      </div>
      <div className="card-duration">
        Duration: <p>{routine.duration}</p>
      </div>
      <div className="card-goal">
        Goal:<p>{routine.goal}</p>
        <div className="card-activity">
          Activity:
          {routine.activities.map(
            ({
              id,
              name,
              description,
              duration,
              count,
              routineActivityId,
              routineId,
            }) => (
              <p key={id}>{name}</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Routines;
