import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  return (
    <div className="link__container">
      <Link className="link" to="/exemplo-aula">Exemplo de aula</Link>
      <Link className="link" to="/exercicio">Exercicio</Link>
    </div>
  );
}
export default Home;
