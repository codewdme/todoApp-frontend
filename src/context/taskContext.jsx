import { createContext, useReducer } from "react";

export const TasksContext = createContext();

// tasksReducer
export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        tasks: action.payload,
      };
    case "CREATE_TASK":
      console.log("task created!");
      return {
        tasks: [action.payload, ...state.tasks],
      };
    case "DELETE_TASK":
      console.log("delete request reached");

      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };
  }
};

// context provider setup
export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [] });

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
