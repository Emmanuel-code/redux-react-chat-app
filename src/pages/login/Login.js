import { Button, IconButton, Input } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
      })
    );
    setName("");
    history.push("/home");
  };
  console.log(name);
  return (
    <div className="login">
      <div className="login__container">
        <h1>Enter your name to enter chat</h1>
        <Input
          className="input__field"
          type="text"
          placeholder="name goes here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button className="button" type="submit" onClick={signIn}>
          ENTER
        </Button>
      </div>
    </div>
  );
}

export default Login;
