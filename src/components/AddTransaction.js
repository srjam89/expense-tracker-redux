import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../actions";

const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    if (text.trim().length > 0) {
      props.addTransaction(newTransaction);
    }
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
            required="number"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => {
    dispatch(addTransaction(transaction));
  },
});
// added null instead of mapstatetoprops to stop re-rendering when state changes
export default connect(null, mapDispatchToProps)(AddTransaction);
