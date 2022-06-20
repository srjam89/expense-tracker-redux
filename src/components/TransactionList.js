import React from "react";
import Transaction from "./Transaction";
import { connect } from "react-redux";
import { deleteTransaction } from "../actions";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            onDelete={deleteTransaction}
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { transactions: state.transactions };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (id) => {
    dispatch(deleteTransaction(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
