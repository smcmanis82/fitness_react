import { useEffect, useState } from "react";
import { getActivities } from "../api";
import ActivityNavBar from "./ActivityNavBar";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import "./Activities.css";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const Activities = () => {
  const [activities, setActivities] = useState();

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
      <h1>Activites</h1>
      <ActivityNavBar />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right" id="activity-name">
                Name
              </TableCell>
              <TableCell align="right" id="activity-description">
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities &&
              activities.map((activity) => {
                return (
                  <TableRow key={activity.name}>
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
