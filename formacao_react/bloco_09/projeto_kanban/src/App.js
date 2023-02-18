import Card from "./Components/Card/Card";
import Column from "./Components/Column/Column";
import Screen from "./Components/Screen/Screen";
import "./reset.css";

import user1 from "./assets/images/user1.png";
import user2 from "./assets/images/user2.png";
import todoIcon from "./assets/images/todo.png";
import inProgress from "./assets/images/inProgress.png";
import review from "./assets/images/review.png";
import done from "./assets/images/done.png";

function App() {
  return (
    <Screen>
      <Column status="toDo" title="To Do" icon={todoIcon}>
        <Card image={user1.toString()} tag="label" status="toDo">
          Christmas Banners
        </Card>
        <Card image={user1.toString()} tag="label" status="toDo">
          Redo Portifolio
        </Card>
      </Column>

      <Column status="inProgress" title="In Progress" icon={inProgress}>
        <Card image={user2.toString()} tag="Always" status="inProgress">
          Coffe Break
        </Card>
        <Card image={user2.toString()} tag="Webflow" status="inProgress">
          Updating Portifolio
        </Card>
      </Column>

      <Column status="review" title="Review" icon={review}>
        <Card image={user1.toString()} tag="Release" status="review">
          Release to Figma Community
        </Card>
        <Card image={user1.toString()} tag="Feedback" status="review">
          User Feedback
        </Card>
        <Card image={user1.toString()} tag="Sourcing" status="review">
          Background images from humaaans.com
        </Card>
      </Column>

      <Column status="done" title="Done" icon={done}>
        <Card image={user2.toString()} tag="UI" status="done">
          Style Guide
        </Card>
        <Card image={user2.toString()} tag="UI" status="done">
          Component Library
        </Card>
        <Card image={user2.toString()} tag="UI" status="done">
          Sticker Components
        </Card>
      </Column>
    </Screen>
  );
}

export default App;
