import React, { useState } from 'react';
import './UserForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    dob: '',
    aadhaar: '',
    pan: '',
    email: '',
    password: '',
    ifscCode: '',
    phone: '',
    gender: '',
    branch: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required.';
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
      const dayDiff = today.getDate() - dobDate.getDate();
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;
      if (age < 18) newErrors.dob = 'You must be at least 18 years old.';
    }

    if (!/^\d{12}$/.test(formData.aadhaar)) newErrors.aadhaar = 'Aadhaar must be a 12-digit number.';
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) newErrors.pan = 'Invalid PAN format.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifscCode)) newErrors.ifscCode = 'Invalid IFSC code format.';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';
    if (!formData.branch) newErrors.branch = 'Please select a bank branch.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('User account created successfully!');
      console.log('Form Data:', formData);
    }
  };

  const bankBranches = ['SBI', 'ICICI', 'HDFC', 'Axis Bank', 'PNB'];

  return (
    <div className="userform-wrapper">
      <div className="header-container">
        <h2 className="gradient-text">Welcome Dear Customer</h2>
        <p className="text-secondary">Create Your Account Here..</p>
      </div>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="row">
          {[
            { label: 'Full Name', name: 'name', type: 'text' },
            { label: 'Address', name: 'address', type: 'text' },
            { label: 'Date of Birth', name: 'dob', type: 'date' },
            { label: 'Aadhaar Number', name: 'aadhaar', type: 'text' },
            { label: 'PAN Number', name: 'pan', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Password', name: 'password', type: 'password' },
            { label: 'Phone Number', name: 'phone', type: 'text', placeholder: 'Phone number registered with Aadhaar' },

          
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="col-md-6 mb-3">
              <label htmlFor={name} className="form-label">{label}</label>
              <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder || ''}
                className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                value={formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
            </div>
          ))}
           <div className="col-md-6 mb-3">
      <label htmlFor="ifscCode" className="form-label">IFSC Code</label>
      <input
        id="ifscCode"
        type="text"
        name="ifscCode"
        className={`form-control ${errors.ifscCode ? 'is-invalid' : ''}`}
        value={formData.ifscCode}
        onChange={handleChange}
      />
      {errors.ifscCode && <div className="invalid-feedback">{errors.ifscCode}</div>}
    </div>

    <div className="col-md-6 mb-3">
      <label htmlFor="branch" className="form-label">Select Bank</label>
      <select
        id="branch"
        name="branch"
        className={`form-select ${errors.branch ? 'is-invalid' : ''}`}
        value={formData.branch}
        onChange={handleChange}
      >
        <option value="">-- Select Branch --</option>
        {bankBranches.map(branch => (
          <option key={branch} value={branch}>{branch}</option>
        ))}
      </select>
      {errors.branch && <div className="invalid-feedback">{errors.branch}</div>}
    </div>

           {/* Gender below IFSC and Select Bank, taking full width */}
    <div className="col-12 mb-3">
      <label className="form-label d-block">Gender</label>
      {['Male', 'Female', 'Other'].map(option => (
        
        <div 
        key={option} 
        className="form-check form-check-inline align-items-center"
        style={{ marginRight: '1.5rem' }}
      >
          <input
            className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
            type="radio"name="gender"
            id={`gender-${option}`}
            value={option}
            checked={formData.gender === option}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor={`gender-${option}`}>{option}</label>
        </div>
      ))}
      {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
    </div>

  </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5 py-2 fs-5">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
