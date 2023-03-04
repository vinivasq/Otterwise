import { Routes, Route } from "react-router-dom";
import CarCreate from "./routes/CarCreate";
import CarEdit from "./routes/CarEdit";
import Home from "./routes/Home";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="car/create" element={<CarCreate />} />
        <Route path="car/edit/:id" element={<CarEdit />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
