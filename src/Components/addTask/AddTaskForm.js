import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [task, setTask] = useState({
    text: props.task ? props.task.text : " ",
    date: props.task ? props.task.date : " ",
  });

  const [success, setSuccess] = useState(false);

  const onChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const { text } = task;
    const newTask = {
      id: uuidv4(),
      text,
      date: `${day} : ${month} : ${year}`,
      completed: "false",
    };
    setSuccess(true);
    setTask("");
    props.addTask(newTask);
  };

  return (
    <div className={classes.Addtask}>
      {success && (
        <div style={{ textAlign: "center", color: "lime" }}>
          <h3>Successful</h3>
        </div>
      )}
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="tasks"
          placeholder="Add Task"
          change={onChangeHandler}
          value={task.text}
        />

        <Button name="Add Task" />
      </form>
    </div>
  );
};

export default AddTask;
