import { Routes, Route } from "react-router-dom";
import ExemploAula from "./routes/ExemploAula";
import Exercicio from "./routes/Exercicio";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exemplo-aula" element={<ExemploAula />} />
      <Route path="/exercicio" element={<Exercicio />} />
    </Routes>
  );
}
