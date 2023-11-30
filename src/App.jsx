import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";

function App() {
  return (
    <div className="flex w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtask" element={<NewTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
