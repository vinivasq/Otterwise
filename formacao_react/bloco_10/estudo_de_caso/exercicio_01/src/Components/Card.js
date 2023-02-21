import "./Card.css";

const Card = (props) => {
  const { image, title, description } = props;
  return (
    <div className="card">
      <img className="card__image" src={image} alt="Imagem da Skill" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
