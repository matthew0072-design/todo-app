import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./AddTask.module.css";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const [success, setSuccess] = useState(false);

  const onChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: task,
    };

    addTask(newTask);
    setSuccess(true);
    setTask("");
  };

  console.log(addTask);

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
