import "./Card.css";
import { useState } from "react";

const Card = (props) => {
  const { image, title, description } = props;
  const [display, setDisplay] = useState("none");

  return (
    <div className="card">
      <img className="card__image" src={image} alt="Imagem da Skill" />
      <h2
        onClick={(e) => {
          setDisplay();
          e.target.parentElement.style.display = display;
        }}
        className="card__title"
      >
        {title}
      </h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
