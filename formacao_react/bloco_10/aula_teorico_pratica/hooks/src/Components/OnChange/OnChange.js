import { useState } from "react";

const OnChange = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default OnChange;
