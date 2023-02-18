import { useEffect, useState } from "react";
import axios from "axios";

const Exercicio = () => {
  const [description, setDescription] = useState("");
  const [resource, setResource] = useState();
  const resourceOptions = ["todos", "posts", "users"];

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setDescription(JSON.stringify(response.data));
    };
    request();
  }, [resource]);
  return (
    <div>
      <button
        onClick={() =>
          setResource(resourceOptions[parseInt(Math.random() * 3)])
        }
      >
        parametrização
      </button>
      <p>{description}</p>
    </div>
  );
};
export default Exercicio;
