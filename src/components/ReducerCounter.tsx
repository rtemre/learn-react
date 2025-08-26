import { useReducer } from "react";

const reducerFunction = (
  state: { count: number },
  action: { type: string }
) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
};

function ReducerCounter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <h1>Counter Implementation using useReducer</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <p>Click the buttons to change the count</p>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerCounter;
