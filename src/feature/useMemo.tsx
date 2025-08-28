import { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const calculation = (value: number) => {
    console.log("Calculate function call", value);

    let result = 0;
    for (let i = 1; i <= value; i++) {
      result += i;
    }
    return result;
  };

  //   console.time("Test time");
  //   calculation(100000);
  //   console.timeLog("Test time");

  //   const calculatedValue = calculation(1000);

  const memoizedValue = useMemo(() => {
    return calculation(1000);
  }, []);
  return (
    <div>
      <h1>useMemo Hook</h1>
      <div>
        <h4>Count: {count}</h4>
        <button onClick={handleIncrease}>Increment</button>
      </div>
      <div>
        <p>Complex Calculation: {memoizedValue}</p>
      </div>
    </div>
  );
}

export default UseMemo;
