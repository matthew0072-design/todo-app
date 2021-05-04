import React, { useContext } from "react";
import classes from "./allTask.module.css";
import { Link } from "react-router-dom";
import MyContext from "../../context";

const AllTask = ({ handleDelete, id, text, date, completed, handleEdit }) => {
  const { tasks } = useContext(MyContext);
  return (
    <div className={classes.AllTask}>
      <div className={classes.Task}>
        <p>Task: {text}</p>
        <p>Completed: {completed} </p>
        <p>Date: {date}</p>
        <div className={classes.button}>
          <Link to={`/edit/${id}`} onClick={() => handleEdit(tasks.id, text)}>
            EDIT
          </Link>
          <button className={classes.Delete} onClick={() => handleDelete(id)}>
            DELETE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
