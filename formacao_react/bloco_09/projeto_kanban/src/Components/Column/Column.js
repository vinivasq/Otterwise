import "./Column.css";

const Column = (props) => {
  const { status, children, title, icon } = props;
  return (
    <div>
      <ul className={`container ${status}`}>
        <div className={`column__head column__head-${status}`}></div>
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
    </div>
  );
};

export default Column;
