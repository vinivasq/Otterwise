import Card from "./Components/Card/Card";
import Screen from "./Components/Screen/Screen";
import "./reset.css";

import user1 from "./assets/images/user1.png";
import todoIcon from "./assets/images/todo.png";
import Column from "./Components/Column/Column";

function App() {
  return (
    <Screen>
      <Column status="toDo" title="To Do" icon={todoIcon}>
        <Card image={user1.toString()} tag="flow" status="toDo">
          Lorem ipsum dolor sit
        </Card>
      </Column>
    </Screen>
  );
}

export default App;
