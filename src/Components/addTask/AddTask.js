import { useContext } from "react";
import React from "react";
import AddTaskForm from "./AddTaskForm";
import MyContext from "../../context";

const AddTask = ({ history }) => {
  const { tasks, setTasks } = useContext(MyContext);

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
    history.push("/");
  };
  return (
    <React.Fragment>
      <AddTaskForm addTask={addTask} />
    </React.Fragment>
  );
};

export default AddTask;
