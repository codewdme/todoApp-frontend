import ToDoList from "../components/ToDoList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full bg-black">
      <Link
        to="/newtask"
        className="fill-black bg-white rounded-xl w-[400px] h-[50px]  text-center flex justify-center items-center text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>{" "}
        Add new task
      </Link>
      <div className="w-[400px] h-[400px] bg-black text-center flex justify-center items-center text-white">
        {" "}
        <ToDoList />
      </div>
    </div>
  );
};

export default Home;
