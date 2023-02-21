import "./App.css";
import Card from "./Components/Card";
import image from "./assets/teste.png";

function App() {
  return (
    <div className="App">
      <Card
        image={image}
        title="Responsive Design"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sequi alias ex quia unde, omnis vitae. Eos totam aliquam maxime, eaque, vel porro architecto dolore rerum eligendi quis, quaerat libero!"
      />
      <Card
        image={image}
        title="HTML, CSS e JS"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sequi alias ex quia unde, omnis vitae. Eos totam aliquam maxime, eaque, vel porro architecto dolore rerum eligendi quis, quaerat libero!"
      />
      <Card
        image={image}
        title="Cooworking"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sequi alias ex quia unde, omnis vitae. Eos totam aliquam maxime, eaque, vel porro architecto dolore rerum eligendi quis, quaerat libero!"
      />
      <Card
        image={image}
        title="Comunicação"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sequi alias ex quia unde, omnis vitae. Eos totam aliquam maxime, eaque, vel porro architecto dolore rerum eligendi quis, quaerat libero!"
      />
      <Card
        image={image}
        title="Pixel perfect"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sequi alias ex quia unde, omnis vitae. Eos totam aliquam maxime, eaque, vel porro architecto dolore rerum eligendi quis, quaerat libero!"
      />
      <Card
        image={image}
        title="Interação"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sequi alias ex quia unde, omnis vitae. Eos totam aliquam maxime, eaque, vel porro architecto dolore rerum eligendi quis, quaerat libero!"
      />
    </div>
  );
}

export default App;
