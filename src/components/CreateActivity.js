import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { HOME_ROUTE } from "../constants";
import "./CreateActivity.css";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const CreateActivityForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const myToken = JSON.parse(localStorage.getItem("token"));
  const CreateActivity = () => {
    return fetch(`${BASE}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch("Activity already exists");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    CreateActivity();
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        id="activity-form"
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
          id="description"
          label="Description"
          onInput={(event) => {
            setDescription(event.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreateActivityForm;
