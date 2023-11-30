import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { dispatch } = useTasksContext();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCompletion, setTaskCompletion] = useState(false);
  const [taskPriority, setTaskPriority] = useState(2);

  // create task api call
  const createTask = async () => {
    const task = { taskName, taskDescription, taskPriority, taskCompletion };
    try {
      const response = await fetch("http://localhost:4000/api/tasks/", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "CREATE_TASK", payload: json });
        navigate("/");
      }
    } catch (error) {
      console.log("request failed of adding a new task");
      console.log(error);
    }
  };

  const handleSubmit = () => {
    createTask();
  };

  return (
    <div className="flex justify-center items-center h-screen  ">
      <div className="bg-[#808080]  w-[50vw] rounded-xl flex flex-col  items-center gap-4 text-white p-6  ">
        <h1>Add new Task</h1>
        <div className="taskHeading w-full border-2 border-white rounded-xl overflow-hidden">
          <label>Task Name</label>
          <input
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            className="p-2 w-full bg-black"
          />
        </div>
        <div className="taskDescription w-full border-2 border-white rounded-xl overflow-hidden">
          <label>Task Description</label>
          <input
            type="text"
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
            className="p-2 w-full bg-black"
          />
        </div>
        <div className="taskPriority w-full  rounded-xl flex justify-between items-center gap-6 ">
          <button
            onClick={() => {
              setTaskPriority(1);
            }}
            className={` w-full border-2  rounded-xl  justify-center flex p-2   ${
              taskPriority == 1
                ? "bg-white text-black scale-105 border-[#FF0000] font-bold"
                : "bg-black text-[#FF0000] border-white"
            }`}
          >
            !!! High
          </button>
          <button
            className={` w-full border-2  rounded-xl  justify-center flex p-2   ${
              taskPriority == 2
                ? "bg-white text-black scale-105 border-[#FFFF00] font-bold"
                : "bg-black text-[#FFFF00] border-white"
            }`}
            onClick={() => {
              setTaskPriority(2);
            }}
          >
            !! Medium
          </button>
          <button
            onClick={() => {
              setTaskPriority(3);
            }}
            className={` w-full border-2  rounded-xl  justify-center flex p-2   ${
              taskPriority == 3
                ? "bg-white text-black scale-105 border-[#ADD8E6] font-bold"
                : "bg-black text-[#ADD8E6] border-white"
            }`}
          >
            ! Low
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="w-1/4 border-2 border-white rounded-xl text-[#ADD8E6] justify-center flex p-2 bg-black "
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
