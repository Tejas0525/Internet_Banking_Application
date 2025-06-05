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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('User account created successfully!');
      console.log('Form Data:', formData);
    }
  };

  const bankBranches = ['', 'SBI', 'ICICI', 'HDFC', 'Axis Bank', 'PNB'];

  return (
    
    <div className="container mt-4 user-form-container">
      <div className="text-center mb-4">
  <img src="/images/logo.png" alt="Bank Logo" className="bank-logo" />
</div>
      <h2 className="text-center text-primary mb-3">Welcome Dear Customer</h2>
      <h4 className="text-center mb-4">Create Account</h4>
    <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
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
      { label: 'IFSC Code', name: 'ifscCode', type: 'text' },
    ].map((field, index) => (
      <div key={field.name} className="col-md-6 mb-3">
        <label className="form-label">{field.label}</label>
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder || ''}
          className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
          value={formData[field.name]}
          onChange={handleChange}
        />
        {errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
      </div>
    ))}

    {/* Gender Full Width */}
    <div className="col-12 mb-3">
      <label className="form-label">Gender</label>
      <div>
        {['Male', 'Female', 'Other'].map((option) => (
          <div className="form-check form-check-inline" key={option}>
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value={option}
              checked={formData.gender === option}
              onChange={handleChange}
            />
            <label className="form-check-label">{option}</label>
          </div>
        ))}
      </div>
      {errors.gender && <div className="text-danger">{errors.gender}</div>}
    </div>

    {/* Branch Dropdown Full Width */}
    <div className="col-12 mb-3">
      <label className="form-label">Select Bank</label>
      <select
        name="branch"
        className={`form-select ${errors.branch ? 'is-invalid' : ''}`}
        value={formData.branch}
        onChange={handleChange}
      >
        <option value="">-- Select Branch --</option>
        {bankBranches.slice(1).map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
      {errors.branch && <div className="invalid-feedback">{errors.branch}</div>}
    </div>
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary w-50">Create Account</button>
  </div>
</form>
</div>
  );
};

export default UserForm;
