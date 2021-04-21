import React, { useContext } from "react";
import Context from "../../context";

const AllTask = React.memo((props) => {
  const { tasks } = useContext(Context);

  return (
    <div>
      {tasks.map((task) => {
        return <div key={task.id}>{task.text}</div>;
      })}
    </div>
  );
});

export default AllTask;
