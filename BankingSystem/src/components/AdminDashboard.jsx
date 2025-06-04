import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Optional for custom styles

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome Admin</h2>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/add-bank')}>Add Bank</button>
        <button onClick={() => navigate('/manage-manager')}>Add /Remove Manager</button>
        
        <button onClick={() => navigate('/all-managers')}>View All Managers</button>
        <button onClick={() => navigate('/all-customers')}>View All Customers</button>
        <button onClick={() => navigate('/transactions-by-account')}>View Customer Transactions</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
