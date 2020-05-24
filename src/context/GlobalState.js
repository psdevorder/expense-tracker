import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Plaća za 04.2020.", category: "Plaća", amount: 8450 },
  ],
};

//  Cretae context
export const GlobalContext = createContext(initialState);

//  Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //  Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function editTransaction(id, transaction) {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: id,
      transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
