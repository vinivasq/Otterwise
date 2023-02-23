import { useState, useEffect } from "react";

const Exercicio2 = (props) => {
  const { value, valueTwo } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect foi executado com value:" + value);
  }, [value, count, valueTwo]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>muda valor</button>
    </div>
  );
};

export default Exercicio2;
