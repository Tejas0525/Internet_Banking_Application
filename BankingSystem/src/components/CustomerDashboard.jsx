import React from 'react';
import { useLocation } from 'react-router-dom';
import './CustomerDashboard.css';

const CustomerDashboard = () => {
  const location = useLocation();
  const transaction = location.state?.transaction;

  return (
    <div className="customer-dashboard-container">
      <h2>Customer Dashboard</h2>

      <h4>Transaction History</h4>
      {transaction ? (
        <table className="transaction-table" aria-label="Customer Transaction History">
          <thead>
            <tr>
              <th>Type</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Bank</th>
              <th>Amount</th>
              <th>Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{transaction.transactionType}</td>
              <td>{transaction.senderAccount}</td>
              <td>{transaction.receiverAccount}</td>
              <td>{transaction.senderBank}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.timestamp}</td>
              <td>{transaction.description || '-'}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="no-transactions-msg">No transactions yet.</p>
      )}
    </div>
  );
};

export default CustomerDashboard;
