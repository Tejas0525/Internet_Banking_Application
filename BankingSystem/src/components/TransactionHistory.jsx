import React from "react";
import "./TransactionHistory.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history-container">
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p className="no-transactions">No transactions yet.</p>
      ) : (
        <table className="transaction-history-table" aria-label="Transaction History Table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.transactionType}</td>
                <td>{tx.senderAccount}</td>
                <td>{tx.receiverAccount}</td>
                <td>{tx.amount}</td>
                <td>{tx.timestamp}</td>
                <td>{tx.description || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionHistory;
