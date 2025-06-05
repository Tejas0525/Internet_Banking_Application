import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
//import './styles/custom.css';
//import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </div>
    </>
  );
}

export default App;
