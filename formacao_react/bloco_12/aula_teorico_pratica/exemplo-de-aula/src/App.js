import { Routes, Route } from "react-router-dom";
import ExemploAula from "./routes/ExemploAula";
import ExemploComponents from "./routes/ExemploComponents";
import Exercicio from "./routes/Exercicio";
import ExercicioListagem from "./routes/ExercicioListagem";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exemplo-aula" element={<ExemploAula />} />
      <Route path="/exemplo-components" element={<ExemploComponents />} />
      <Route path="/exercicio" element={<Exercicio />} />
      <Route path="/listagem" element={<ExercicioListagem />} />
    </Routes>
  );
}
