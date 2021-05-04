import { useContext, useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import MyContext from "../../context";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const EditTask = () => {
  const history = useHistory();
  const { tasks, setTasks } = useContext(MyContext);

  const [task, setTask] = useState("");

  const onChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
    history.push("/");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const newTask = {
      id: uuidv4(),
      text: task,
      date: `${day}:${month}:${year}`,
      completed: "false",
    };
    addTask(newTask);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="tasks"
          placeholder="Edit Task"
          change={onChangeHandler}
          value={task.text}
        />

        <Button name="Edit" />
      </form>
    </div>
  );
};

export default EditTask;
