import { useEffect, useState } from "react";
import axios from "axios";

const ExercicioRequest = (props) => {
  const { id } = props;
  const [count, setCount] = useState(1);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${count}`
      ); //pode ser puxado pelo id também

      console.log(response.data);
    };
    request();
  }, [id, count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>muda valor</button>
    </div>
  );
};

export default ExercicioRequest;
