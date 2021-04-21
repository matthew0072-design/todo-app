import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <button>{props.name}</button>
    </div>
  );
};

export default Button;
