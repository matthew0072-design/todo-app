import { useContext } from "react";
import MyContext from "../../context";
import AddTaskForm from "../addTask/AddTaskForm";
import { useHistory, useParams } from "react-router-dom";

const EditTask = () => {
  const history = useHistory();
  const { id } = useParams();
  const { tasks, setTasks } = useContext(MyContext);

  const editedTask = tasks.find((task) => task.id === id);

  const onSubmitHandler = (task) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks([task, ...filtered]);
    history.push("/");
  };

  return (
    <div>
      <AddTaskForm editedTask={editedTask} onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default EditTask;
