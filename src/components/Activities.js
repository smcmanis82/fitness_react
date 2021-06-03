import React, { useEffect } from "react";
import { getActivities } from "../api";
import "./Activities.css";
import ActivityNavBar from "./ActivityNavBar";

const Activities = ({ activities, setActivities }) => {
  useEffect(() => {
    getActivities()
      .then((activity) => {
        setActivities(activity);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      <div className="page-head">
        <h1>Activities</h1>
        <ActivityNavBar />
      </div>
      <div id="activities-container">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-cards">
            {createActivityHTML(activity)}
          </div>
        ))}
      </div>
    </>
  );
};

const createActivityHTML = (activity) => {
  return (
    <div className="activity-card">
      <div className="card-name">
        Activity:<p>{activity.name}</p>
      </div>
      <div className="card-desciption">
        Description:<p>{activity.description}</p>
      </div>
    </div>
  );
};

export default Activities;
