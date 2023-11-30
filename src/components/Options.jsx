import { useNavigate } from "react-router-dom";
import { useTasksContext } from "../hooks/useTasksContext";
import { Link } from "react-router-dom";

const Options = ({ task }) => {
  const { dispatch } = useTasksContext();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const id = task._id;

    const deleteTask = async () => {
      const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
        method: "DELETE",
      });
      const json = await response.json();
      dispatch({ type: "DELETE_TASK", payload: json });

      console.log(response);
    };

    deleteTask();

    // dispatch remove task.
  };

  return (
    <div className="options flex gap-2 justify-between w-full">
      <Link
        to="/edittask"
        className="edit flex gap-2 justify-center items-center w-full py-2 rounded-xl border-2 border-white  text-white fill-white hover:bg-white hover:fill-black hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="18"
          viewBox="0 0 576 512"
        >
          <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
        </svg>
        <p>Edit</p>
      </Link>

      <button
        className="delete flex gap-2 justify-center items-center w-full py-2 rounded-xl border-2 border-white  text-white fill-white hover:bg-white hover:fill-[#FF0000] hover:text-black"
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
        <p>Delete</p>
      </button>
    </div>
  );
};

export default Options;
