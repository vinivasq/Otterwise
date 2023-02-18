import "./Card.css";

const Card = (props) => {
  const { children, tag, image, status } = props;
  return (
    <li className="list__item">
      <h3 className="item__description">{children}</h3>
      <div className="item__info">
        <img src={image} alt="imagem do colaborador" className="info__img" />
        <p className={`info__tag ${status}`}>{tag}</p>
      </div>
    </li>
  );
};

export default Card;
