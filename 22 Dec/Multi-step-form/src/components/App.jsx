import React, { useReducer } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

// Initial State
const initialState = {
  currentStep: 1,
  formValues: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,
};

// Action Types
export const ACTIONS = {
  UPDATE_FIELD: "UPDATE_FIELD",
  NEXT_STEP: "NEXT_STEP",
  PREVIOUS_STEP: "PREVIOUS_STEP",
  SUBMIT_FORM: "SUBMIT_FORM",
  RESET_FORM: "RESET_FORM",
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.field]: action.value,
        },
      };
    case ACTIONS.NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case ACTIONS.PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        isSubmitted: true,
      };
    case ACTIONS.RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentStep, formValues, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div className="container">
        <h2>Registration Successful!</h2>
        <button onClick={() => dispatch({ type: ACTIONS.RESET_FORM })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>User Registration</h1>
      <p>Step {currentStep} / 3</p>

      {currentStep === 1 && <Step1 formValues={formValues} dispatch={dispatch} />}
      {currentStep === 2 && <Step2 formValues={formValues} dispatch={dispatch} />}
      {currentStep === 3 && <Step3 formValues={formValues} dispatch={dispatch} />}

      <div className="buttons">
        {currentStep > 1 && (
          <button onClick={() => dispatch({ type: ACTIONS.PREVIOUS_STEP })}>
            Previous
          </button>
        )}
        {currentStep < 3 && (
          <button onClick={() => dispatch({ type: ACTIONS.NEXT_STEP })}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
