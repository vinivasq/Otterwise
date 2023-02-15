import "./App.css";
import Card from "./components/Card/Card";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Card name="Vinicius" age="21" roll="Developer" >
        <p>O Vinícius está estudando sobre React</p>
      </Card>
      <Card name="Victoria" age="22" roll="Chemistry" />
    </Fragment>
  );
}

export default App;
