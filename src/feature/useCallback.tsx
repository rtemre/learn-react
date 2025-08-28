import { memo, useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>use Callback hook</h1>
      <div>
        <h4>Count: {count}</h4>
        <MemoizedChild handleIncrease={handleIncrease} />
      </div>
    </div>
  );
}

const MemoizedChild = memo(Child);

export default UseCallback;

function Child({ handleIncrease }: { handleIncrease: () => void }) {
  console.log("Render Child Component");

  return <button onClick={handleIncrease}>Increment</button>;
}
