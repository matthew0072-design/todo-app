import React, { useState } from "react";
import classes from "./Signup.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Signup = (props) => {
  const [newForm, setForm] = useState({
    email: "",
    password: "",
    number: "",
    zip: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    setForm({
      email: event.target.value,
      password: event.target.value,
      number: event.target.value,
      zip: event.target.value,
    });
  };

  return (
    <div className={classes.Signup}>
      <div className="account">
        <p>Create an account </p>
        <p>Quickly & easily create an account using the form below </p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          change={onChangeHandler}
          value={newForm.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          change={onChangeHandler}
          value={newForm.password}
        />
        <Input
          type="number"
          name="number"
          placeholder="Phone Number"
          change={onChangeHandler}
          value={newForm.number}
        />
        <Input
          type="number"
          name="zip"
          placeholder="Zip code"
          change={onChangeHandler}
          value={newForm.zip}
        />

        <Button name="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;
