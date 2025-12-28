import React from "react";
import { ACTIONS } from "../App";

export default function Step3({ formValues, dispatch }) {
  return (
    <div>
      <h2>Step 3: Review & Submit</h2>
      <p><strong>Name:</strong> {formValues.name}</p>
      <p><strong>Email:</strong> {formValues.email}</p>
      <p><strong>Username:</strong> {formValues.username}</p>
      <p><strong>Password:</strong> {formValues.password}</p>
      <button onClick={() => dispatch({ type: ACTIONS.SUBMIT_FORM })}>
        Submit
      </button>
    </div>
  );
}
