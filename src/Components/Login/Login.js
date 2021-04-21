import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={classes.Login}>
      <div>
        <p className={classes.Para}>Login form </p>
      </div>
      <Input
        type="email"
        name="email"
        change={props.onChangeHandler}
        placeholder="Email"
      />
      <Input
        type="password"
        name="password"
        change={props.onChangeHandler}
        placeholder="Password"
      />
      <Button name="Login"></Button>
    </div>
  );
};

export default Login;
