"use client";
import { useState } from "react";

//  Problem Statement

// When i click on label, the checkbox is not getting checked/unchecked
const IncorrectCheckboxHandling = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  return (
    <div>
      <h1 className="my-2 text-lg font-semibold text-gray-900 dark:text-white">
        Incorrect way of Checkbox Handling{" "}
      </h1>
      <div>
        <h3>Problem Statement</h3>
        <p>
          When i click on label, the checkbox is not getting checked/unchecked
        </p>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        value={"terms"}
      />
      <span>Accept Terms and Conditions</span>
      <p>{checked ? "Checked" : "Unchecked"}</p>
    </div>
  );
};

// Solution

// When i click on label, the checkbox is getting checked/unchecked
// By binding the label to the checkbox using the "htmlFor" attribute
// we can toggle the checkbox when the label is clicked.

const CorrectCheckboxHandling = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  return (
    <div>
      <h1 className="my-2 text-lg font-semibold text-gray-900 dark:text-white">
        Correct way of Checkbox Handling{" "}
      </h1>
      <div>
        <h3>Solution</h3>
        <h2>
          When i click on label, the checkbox is getting checked/unchecked
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
            By binding the label to the checkbox using the (htmlFor) attribute
          </li>
          <li>we can toggle the checkbox when the label is clicked.</li>
        </ul>

        <p> </p>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        value={"terms"}
        id="terms"
      />
      <label htmlFor="terms">I agree to the terms and conditions</label>
      <p>{checked ? "Checked" : "Unchecked"}</p>
    </div>
  );
};

const CheckboxHandlingPage = () => {
  return (
    <div className="container">
      <IncorrectCheckboxHandling />
      <CorrectCheckboxHandling />
    </div>
  );
};
export default CheckboxHandlingPage;
