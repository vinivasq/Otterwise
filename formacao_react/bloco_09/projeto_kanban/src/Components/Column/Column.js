import "./Column.css";

const Column = (props) => {
  const { status, children, title, icon } = props;
  return (
    <ul className={`container ${status}`}>
      <div className="column__head"></div>
      <div className="column">
        <h2 className="column__title">
          <img
            src={icon.toString()}
            alt="icone da lista"
            className="column__icon"
          />
          {title}
        </h2>
        {children}
      </div>
    </ul>
  );
};

export default Column;
