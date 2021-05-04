import { useContext } from "react";
import AllTask from "../allTask/allTask";
import MyContext from "../../context";

const AllTasks = (props) => {
  const { tasks, setTasks } = useContext(MyContext);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, newValue) => {
    setTasks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newValue } : item))
    );
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <AllTask
            id={task.id}
            key={task.id}
            handleDelete={handleDelete}
            text={task.text}
            completed={task.completed}
            date={task.date}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};

export default AllTasks;
