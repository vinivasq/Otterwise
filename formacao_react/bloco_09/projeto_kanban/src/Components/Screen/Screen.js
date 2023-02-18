import "./Screen.css";

const Screen = (props) => {
  const { children } = props;
  return (
    <main className="main">
      <h1 className="main__title">Kanban</h1>
      <section className="columns__container">{children}</section>
    </main>
  );
};

export default Screen;
