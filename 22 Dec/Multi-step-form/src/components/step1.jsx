import React from "react";
import { ACTIONS } from "../App";

export default function Step1({ formValues, dispatch }) {
  return (
    <div>
      <h2>Step 1: Personal Details</h2>
      <label>
        Name: 
        <input
          type="text"
          value={formValues.name}
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_FIELD, field: "name", value: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Email: 
        <input
          type="email"
          value={formValues.email}
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_FIELD, field: "email", value: e.target.value })
          }
        />
      </label>
    </div>
  );
}
