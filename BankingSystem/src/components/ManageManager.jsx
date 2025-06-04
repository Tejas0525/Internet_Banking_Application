import React, { useState } from 'react';
import './ManageManager.css';

const ManageManager = () => {
  const [formData, setFormData] = useState({
    managerName: '',
    bankName: '',
    address: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // TODO: Replace this with actual API logic
    alert('Manager added:\n' + JSON.stringify(formData, null, 2));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    // TODO: Replace this with actual API logic
    alert('Manager removed:\n' + JSON.stringify({ email: formData.email }));
  };

  return (
    <div className="container">
      <h2>Manage Manager</h2>
      <form>
        <div>
          <label>Manager Name:</label>
          <input 
            type="text" 
            name="managerName" 
            value={formData.managerName} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Bank Name:</label>
          <input 
            type="text" 
            name="bankName" 
            value={formData.bankName} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Address:</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <button onClick={handleAdd}>   Add Manager</button>
          <button onClick={handleRemove}>Remove Manager</button>
        </div>
      </form>
    </div>
  );
};

export default ManageManager;
