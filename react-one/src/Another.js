import { useState } from "react";

function ChildComponent({ onIncrement }) {
  return (
    <button onClick={onIncrement}>Increment Count</button>
  );
}

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}


