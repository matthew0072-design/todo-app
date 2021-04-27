import { useContext } from "react";
import AllTask from "../allTask/allTask";
import MyContext from "../../context";

const AllTasks = (props) => {
  const { tasks, setTasks } = useContext(MyContext);

  const handleDelete = (id) => {
    // const remainingTasks = [...tasks];
    // remainingTasks.splice(id, 1);
    // setTasks(remainingTasks);
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);

    console.log("Delete key was clicked");
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <AllTask
            key={task.id}
            handleDelete={handleDelete}
            text={task.text}
            completed={task.completed}
            date={task.date}
          />
        );
      })}
    </div>
  );
};

export default AllTasks;
