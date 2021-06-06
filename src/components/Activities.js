// import React, { useEffect } from "react";
// import { getActivities } from "../api";
// import "./Activities.css";
import ActivityNavBar from "./ActivityNavBar";

// const Activities = ({ activities, setActivities }) => {
//   useEffect(() => {
//     getActivities()
//       .then((activity) => {
//         setActivities(activity);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   });
//   return (
//     <>
//       <div className="page-head">
//         <h1>Activities</h1>
//         <ActivityNavBar />
//       </div>
//       <div id="activities-container">
//         {activities.map((activity) => (
//           <div key={activity.id} className="activity-cards">
//             {createActivityHTML(activity)}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// const createActivityHTML = (activity) => {
//   return (
//     <div className="activity-card">
//       <div className="card-name">
//         Activity:<p>{activity.name}</p>
//       </div>
//       <div className="card-desciption">
//         Description:<p>{activity.description}</p>
//       </div>
//     </div>
//   );
// };

// export default Activities;

import axios from "axios";
import { useEffect, useState } from "react";
import { ACTIVITIES_ROUTE } from "../constants";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const Activities = () => {
  const [activities, setActivities] = useState();

  useEffect(() => {
    axios.get(`${BASE}${ACTIVITIES_ROUTE}`).then(({ data }) => {
      if (data.length) {
        setActivities(data);
      }
    });
  }, []);
  return (
    <>
      <h1>Activites</h1>
      <ActivityNavBar />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities &&
              activities.map((activity) => {
                return (
                  <TableRow key={activity.name}>
                    <TableCell component="th" scope="row">
                      {activity.id}
                    </TableCell>
                    <TableCell align="right">{activity.name}</TableCell>
                    <TableCell align="right">{activity.description}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Activities;
