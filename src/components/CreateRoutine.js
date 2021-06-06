import React, { useState } from "react";
import RoutineNavBar from "./RoutineNavBar";
import { Link } from "react-router-dom";
import "./CreateRoutine.css";
import { TextField, Button } from "@material-ui/core";
const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const CreateRoutineForm = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const myToken = JSON.parse(localStorage.getItem("token"));

  const CreateRoutine = () => {
    return fetch(`${BASE}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic: true,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    CreateRoutine();
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        id="routine-form"
        onSubmit={onFormSubmit}
      >
        <TextField
          id="name"
          label="Name"
          onInput={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="goal"
          label="Goal"
          onInput={(event) => {
            setGoal(event.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
      </form>{" "}
    </>
  );
};

export default CreateRoutineForm;
