import { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState(0);
  function handleClick() {
    setCount(Count + 1);
  }
  return (
    <div>
      {" "}
      <h1> Count Value is {Count} </h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
