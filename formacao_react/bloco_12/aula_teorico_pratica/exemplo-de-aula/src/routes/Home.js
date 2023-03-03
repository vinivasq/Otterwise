import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "../components/Button";
const Home = () => {


  return (
    <Fragment>
      <div className="link__container">
        <Link className="link" to="/exemplo-aula">
          Exemplo de aula
        </Link>
        <Link className="link" to="/exercicio">
          Exercicio
        </Link>
      </div>
      <Button disabled>Styled Botão</Button>
    </Fragment>
  );
};
export default Home;
