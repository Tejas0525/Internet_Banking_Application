import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import ForgotPassword from './components/ForgotPassword';
import AddBankForm from './components/AddBankForm';
import UserForm from './components/UserForm';
import TransactionPage from './components/TransactionPage';
import AdminDashboard from './components/AdminDashboard';
import ManageManager from './components/ManageManager';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/register" element={<UserForm />} />
        <Route path="/add-bank" element={<AddBankForm />} />
        <Route path="/create-user" element={<UserForm />} />
        <Route path="/transaction-page" element={<TransactionPage />} />
        
<Route path="/manage-manager" element={<ManageManager />} />
      </Routes>
    </Router>
  );
}

export default App;
