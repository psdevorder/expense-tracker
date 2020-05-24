import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Hrana");
  const [id, setId] = useState();

  if (id) {
    setText(text);
    setAmount(amount);
    setCategory(category);
    setId(id);
  }

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      category,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount(0);
    setCategory("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Hrana">Hrana</option>
            <option value="Odjeća">Odjeća</option>
            <option value="Auto">Auto</option>
            <option value="Stvari">Stvari</option>
            <option value="Plaća">Plaća</option>
            <option value="Ostalo">Ostalo</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
