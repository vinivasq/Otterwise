import { Routes, Route } from "react-router-dom";
import Comment from "./routes/Comment";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comment/:id" element={<Comment />} />
    </Routes>
  );
}

export default App;
