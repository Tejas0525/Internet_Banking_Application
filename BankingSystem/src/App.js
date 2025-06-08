import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import ForgotPassword from './components/ForgotPassword';
import AddBankForm from './components/AddBankForm';
import UserForm from './components/UserForm';
import TransactionPage from './components/TransactionPage';
import AdminDashboard from './components/AdminDashboard';
import ManageManager from './components/ManageManager';
import ManagerDashboard from './components/ManagerDashboard';
import Navbar from './components/style/Navbar'
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <Router>
      <Navbar /> {/* ✅ Add this line to show Navbar on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/add-bank" element={<AddBankForm />} />
        <Route path="/create-user" element={<UserForm />} />
        <Route path="/transaction-page" element={<TransactionPage />} />
        <Route path="/manage-manager" element={<ManageManager />} />
        <Route path="/create-account" element={<UserForm />} />
       
        </Routes>
    </Router>
  );
}

export default App;
