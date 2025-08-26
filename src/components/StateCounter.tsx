import { useState } from "react";
import useCustomMemo from "../hooks/useCustomMemo";

function StateCounter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementValue = () => {
    setValue(value + 1);
  };
  const handleDecrementValue = () => {
    setValue(value - 1);
  };

  const squaredValue = () => {
    console.log("Expensive Calculation");

    return value * value;
  };

  const memoizedSquaredValue = useCustomMemo(squaredValue, [value]);
  return (
    <div>
      <h1>useMemo Polyfill</h1>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
      <p>Squared value: {memoizedSquaredValue}</p>
      <div>
        <button onClick={handleIncrement}>Increment Counter</button>
        <button onClick={handleDecrement}>Decrement Counter</button>
      </div>
      <div>
        <button onClick={handleIncrementValue}>Increment Value</button>
        <button onClick={handleDecrementValue}>Decrement Value</button>
      </div>
    </div>
  );
}

export default StateCounter;
