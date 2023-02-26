import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home"
import Posts from "./routes/Posts"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/posts/:id" element={<Posts/>} />
      <Route path="/users" element={<p>users</p>} />
    </Routes>
  )
}

export default App;
