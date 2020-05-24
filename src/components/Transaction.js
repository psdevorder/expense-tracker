import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { editTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text} ({transaction.category})
      <span>
        {sign}
        {Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
      <button
        onClick={() => editTransaction(transaction.id, transaction)}
        className="edit-btn"
      >
        E
      </button>
    </li>
  );
};
