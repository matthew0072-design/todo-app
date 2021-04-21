import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
};

export default Input;
