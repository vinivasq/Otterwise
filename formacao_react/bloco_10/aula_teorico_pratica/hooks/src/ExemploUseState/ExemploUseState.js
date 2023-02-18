import { useState } from "react";

const ExemploUseState = () => {
  let [number, setNumber] = useState(0);
  let [name, setName] = useState(true);

  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number - 1)}>remove</button>
      <button onClick={() => setNumber(number + 1)}>adiciona</button>

      <button
        onClick={() => {
          setName(!name);
        }}
      >
        toggle name
      </button>
      {name ? <p>Vinicius</p> : ""}
    </div>
  );
};

export default ExemploUseState;
