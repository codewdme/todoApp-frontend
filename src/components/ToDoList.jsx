import { useEffect, useState } from "react";
import Task from "./Task";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      setTasks(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      getTasks();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      {tasks.map((task) => (
        <Task key={task._id} {...task} />
      ))}
    </div>
  );
};

export default ToDoList;
