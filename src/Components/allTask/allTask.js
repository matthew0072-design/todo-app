import React from "react";
import classes from "./allTask.module.css";

const AllTask = ({ handleDelete, id, text, date, completed }) => {
  return (
    <div className={classes.AllTask}>
      <div className={classes.Task}>
        <p>Task: {text}</p>
        <p>Completed: {completed} </p>
        <p>Date: {date}</p>
        <div className={classes.button}>
          <button className={classes.Edit}>EDIT</button>
          <button className={classes.Delete} onClick={() => handleDelete(id)}>
            DELETE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
