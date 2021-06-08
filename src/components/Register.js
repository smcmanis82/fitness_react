import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { HOME_ROUTE } from "../constants";
import "./Register.css";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const registerUser = async () => {
    return await axios
      .post(`${BASE}/users/register`, {
        username,
        password,
      })
      .then(({ data: { token } }) => {
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
          window.location.href = `${HOME_ROUTE}`;
        } else {
          setErrorMessage("Invalid Username or Password");
        }
      })
      .catch(() => {
        setErrorMessage("Invalid Username or Password");
      });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    registerUser();
  };

  return (
    <>
      {errorMessage}
      <form
        noValidate
        autoComplete="off"
        id="register-form"
        onSubmit={onFormSubmit}
      >
        <TextField
          id="username"
          label="Username"
          onInput={(event) => {
            setUsername(event.target.value);
          }}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          onInput={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button type="submit">Register</Button>
      </form>{" "}
    </>
  );
};
export default Register;
