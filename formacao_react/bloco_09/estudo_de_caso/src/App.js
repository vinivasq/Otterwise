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
        Button 3
      </Button>
      <Button variant="outlined" disabled>
        Button 4
      </Button>
      <Button variant="solid" colorScheme="blue">
        Button 5
      </Button>
      <Button variant="outlined" colorScheme="pink">
        Button 6
      </Button>

      <div className="text">
        <Text align="center" fontSize="sm">Texto</Text>
        <Text align="start">Texto</Text>
        <Text align="end" as="h1" fontSize="lg" className="text-red">
          Texto
        </Text>
      </div>
    </div>
  );
}

export default App;
