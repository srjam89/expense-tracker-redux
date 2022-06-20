import React from "react";
import { connect } from "react-redux";

const IncomeExpenses = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);

  const addIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const addExpenses = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{addIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{addExpenses}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps, {})(IncomeExpenses);
