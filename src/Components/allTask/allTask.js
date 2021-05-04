import React from "react";
import classes from "./allTask.module.css";
import { useHistory } from "react-router-dom";

const AllTask = ({ handleDelete, id, text, date, completed }) => {
  const history = useHistory();

  return (
    <div className={classes.AllTask}>
      <div className={classes.Task}>
        <p>Task: {text}</p>
        <p>Completed: {completed} </p>
        <p>Date: {date}</p>
        <div className={classes.button}>
          <button onClick={() => history.push(`/edit/${id}`)}>EDIT</button>

          <button className={classes.Delete} onClick={() => handleDelete(id)}>
            DELETE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
