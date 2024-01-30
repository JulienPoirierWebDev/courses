import React, { useReducer, useState } from "react";

const CONSTANTS_REDUCER = {
  ADD: "ADD",
  SUBSTRACT: "SUBSTRACT",
  RESET: "RESET",
  DOUBLE: "DOUBLE",
  MULTIPLY: "MULTIPLY",
};

const amountReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS_REDUCER.ADD:
      return state + action.value;
      break;
    case CONSTANTS_REDUCER.SUBSTRACT:
      if (state - action.value < 0) {
        return 0;
      } else {
        return state - action.value;
      }
    case CONSTANTS_REDUCER.RESET:
      return 0;
    case CONSTANTS_REDUCER.DOUBLE:
      return state * 2;
    case CONSTANTS_REDUCER.MULTIPLY:
      return state * action.value;
    default:
      throw new Error("Action.type non valide");
  }
};

function Account() {
  const [state, dispatch] = useReducer(amountReducer, 0);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            dispatch({ type: CONSTANTS_REDUCER.ADD, value: 10 });
          }}
        >
          Ajouter 10€
        </button>
        <button
          onClick={() => {
            dispatch({ type: CONSTANTS_REDUCER.SUBSTRACT, value: 10 });
          }}
        >
          Enlever 10€
        </button>
        <button
          onClick={() => {
            dispatch({ type: CONSTANTS_REDUCER.ADD, value: 100 });
          }}
        >
          Ajouter 100€
        </button>
        <button
          onClick={() => {
            dispatch({ type: CONSTANTS_REDUCER.SUBSTRACT, value: 100 });
          }}
        >
          Enlever 100€
        </button>
        <button
          onClick={() => {
            dispatch({ type: CONSTANTS_REDUCER.RESET });
          }}
        >
          Remettre a zéro
        </button>
        <button
          onClick={() => {
            dispatch({ type: CONSTANTS_REDUCER.DOUBLE });
          }}
        >
          Doubler la mise
        </button>
      </div>

      <div style={{ textAlign: "center" }}>
        <h2>Solde du compte</h2>
        <p>{state}</p>
      </div>
    </div>
  );
}

export default Account;
