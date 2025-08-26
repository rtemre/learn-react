import { useReducer } from "react";

type FormState = { name: string; email: string };
type ReducerAction = Partial<FormState>;

function reducerFunction(state: FormState, action: ReducerAction): FormState {
  return { ...state, ...action };
}

function InputForm() {
  const initialState = { name: "", email: "" };
  const [formData, setFormData] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <h1>Input Form Component</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // handle submit logic here
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ name: e.target.value })}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ email: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submitted Form Data:</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
}

export default InputForm;
