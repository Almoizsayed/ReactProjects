import { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState(0);
  const [incrementBy, setincrementBy] = useState(1);
  function handleClick() {
    setCount(Count + incrementBy);
  }
  function decrement() {
    setCount(Count - incrementBy);
  }
  function increaseincrement() {
    setincrementBy(incrementBy + 1);
    console.log(incrementBy);
  }
  function decreaseincrement() {
    setincrementBy(incrementBy - 1);
  }
  return (
    <div>
      {" "}
      <h1> Count Value is {Count} </h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement </button>
      <button onClick={increaseincrement}>Increase Increment</button>
      <h1> Increment Value is {incrementBy} </h1>
      <button onClick={decreaseincrement}> Decrease Decrement</button>
    </div>
  );
}
