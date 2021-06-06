import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";
import "./Routines.css";
import axios from "axios";

import { ROUTINES_ROUTE } from "../constants";
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

const Routines = ({ routines, setRoutines }) => {
  const [activities, setActivities] = useState();
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
      <h1>Routines</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Routine Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Goal</TableCell>
              <TableCell align="right">Creator</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routines &&
              routines.map((routine) => {
                return (
                  <TableRow key={routine.name}>
                    <TableCell component="th" scope="row">
                      {routine.id}
                    </TableCell>
                    <TableCell align="right">{routine.name}</TableCell>
                    <TableCell align="right">{routine.description}</TableCell>
                    <TableCell align="right">{routine.goal}</TableCell>
                    <TableCell align="right">{routine.creatorName}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
//   return (
//     <>
//       <div className="page-head">
//         <h1>Routines</h1>
//       </div>
//       <div id="routines-container">
//         {routines.map((routine) => (
//           <div key={routine.id} className="routine-cards">
//             {createRoutineHTML(routine)}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// const createRoutineHTML = (routine) => {
//   return (
//     <div className="routine-card">
//       <div className="card-name">
//         Routine:<p>{routine.name}</p>
//       </div>
//       <div className="card-creator">
//         Creator: <p>{routine.creatorName}</p>
//       </div>
//       <div className="card-count">
//         Count: <p>{routine.count}</p>
//       </div>
//       <div className="card-duration">
//         Duration: <p>{routine.duration}</p>
//       </div>
//       <div className="card-goal">
//         Goal:<p>{routine.goal}</p>
//         <div className="card-activity">
//           Activity:
//           {routine.activities.map(
//             ({
//               id,
//               name,
//               description,
//               duration,
//               count,
//               routineActivityId,
//               routineId,
//             }) => (
//               <p key={id}>{name}</p>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Routines;
