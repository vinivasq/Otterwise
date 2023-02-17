import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="container">
      <Button variant="solid" onClick={() => console.log("Clicou")}>
        Button
      </Button>
      <Button variant="outlined" isLoading>
        Button 2
      </Button>
      <Button variant="solid" disabled>
        Button3
      </Button>
      <Button variant="outlined" disabled>
        Button3
      </Button>

      <Text fontSize="sm">Texto</Text>
      <Text>Texto</Text>
      <Text as="h1" fontSize="lg" className="text-red">
        Texto
      </Text>
    </div>
  );
}

export default App;
