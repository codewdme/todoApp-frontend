import { useState } from "react";
import Options from "./Options";

const Task = (task) => {
  const { taskName, taskDescription, taskPriority, taskCompletion } = task;

  //   checkbutton
  const [isChecked, setIsChecked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
    setShowOptions(false);
  };

  //edit-delete options

  const handleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-4 border-2 border-white rounded-xl justify-between items-center px-4 py-2 ">
        <div className="flex gap-4 items-center">
          <div className="checkbox">
            <button
              className={`rounded-full border-2 border-white h-[25px] w-[25px] ${
                isChecked ? "bg-white" : "bg-black"
              }`}
              onClick={handleCheck}
            ></button>
          </div>
          <div className="flex flex-col justify-center text-left ">
            <h1
              className={` font-bold text-xl ${
                isChecked ? "line-through" : " "
              }`}
            >
              {taskName}
            </h1>
            <p className={` text-sm ${isChecked ? "line-through" : " "}`}>
              {taskDescription.slice(0, 20)}
              ...{" "}
            </p>
          </div>
        </div>
        <div className="options fill-white">
          <button onClick={handleOptions} className="items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[25px]"
              viewBox="0 0 448 512"
            >
              <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
            </svg>
          </button>
        </div>
      </div>

      {/* options buttons */}
      {showOptions && (
        <div className="Options-dropbox w-full">
          <Options task={task} />
        </div>
      )}
    </div>
  );
};

export default Task;
