import React from "react";
import { ACTIONS } from "../App";

export default function Step2({ formValues, dispatch }) {
  return (
    <div>
      <h2>Step 2: Account Details</h2>
      <label>
        Username: 
        <input
          type="text"
          value={formValues.username}
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_FIELD, field: "username", value: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Password: 
        <input
          type="password"
          value={formValues.password}
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_FIELD, field: "password", value: e.target.value })
          }
        />
      </label>
    </div>
  );
}
