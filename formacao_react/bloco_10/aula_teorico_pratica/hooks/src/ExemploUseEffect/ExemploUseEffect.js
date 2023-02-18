import { useEffect, useState } from "react";
import axios from "axios";

const ExemploUseEffect = (props) => {
  const { userId } = props;
  const [description, setDescription] = useState("");

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${userId}`
      );
      setDescription(JSON.stringify(response.data));
    };
    request();
  }, [userId]);
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default ExemploUseEffect;
