import { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { HOME_ROUTE } from "../constants";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const loginUser = async () => {
    return await axios
      .post(`${BASE}/users/login`, {
        username,
        password,
      })
      .then(({ data: { token } }) => {
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
          window.location.href = `${window.location.orgin}${HOME_ROUTE}`;
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
    loginUser();
  };

  return (
    <>
      {errorMessage}
      <form
        noValidate
        autoComplete="off"
        id="login-form"
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
        <Button type="submit">Login</Button>
      </form>{" "}
    </>
  );
};
export default Login;