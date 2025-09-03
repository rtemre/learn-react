import { useEffect, useState } from "react";

function Converter() {
  const [decimalValue, setDecimalValue] = useState("");
  const [binaryValue, setBinaryValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [error, setError] = useState("");

  const convertValues = (value: string) => {
    // Strict check: only optional "-" and digits allowed
    if (!/^-?\d+$/.test(value.trim())) {
      setError("Invalid input");
      return;
    }

    const decimal = parseInt(value, 10);

    // Allow range inclusive of boundaries
    if (decimal < -2174323 || decimal > 2174323) {
      setError("Value out of range");
      return;
    }

    setError("");
    setBinaryValue(decimal.toString(2));
    setHexValue(decimal.toString(16).toUpperCase());
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      convertValues(decimalValue);
    }, 500);
    console.log("🚀 ~ Converter ~ debounce:", debounce, decimalValue);
    return () => clearTimeout(debounce);
  }, [decimalValue]);

  const handleReset = () => {
    setDecimalValue("");
    setBinaryValue("");
    setHexValue("");
    setError("");
  };

  return (
    <div>
      <h1>Convert Calculator</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ marginBottom: "10px" }}
      >
        <input
          type="number"
          name={decimalValue}
          id="decimal-value"
          value={decimalValue}
          onChange={(e) => setDecimalValue(e.target.value)}
        />
      </form>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {error && decimalValue !== "" && <p>Error: {error}</p>}
      <div>
        <p>Binary: {binaryValue}</p>
        <p>Hex: {hexValue}</p>
      </div>
    </div>
  );
}

export default Converter;
