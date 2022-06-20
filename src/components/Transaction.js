import React from "react";

const Transaction = ({ transaction, onDelete }) => {
  const symbol = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {symbol}£{Math.abs(transaction.amount)}
        </span>
        <button onClick={() => onDelete(transaction.id)} className="delete-btn">
          X
        </button>
      </li>
    </div>
  );
};

export default Transaction;
