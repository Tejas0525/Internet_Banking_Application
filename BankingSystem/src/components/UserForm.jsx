import React, { useState } from 'react';
import './UserForm.css';

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

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required.';
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
      const dayDiff = today.getDate() - dobDate.getDate();
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
      if (age < 18) {
        newErrors.dob = 'You must be at least 18 years old.';
      }
    }

    if (!/^\d{12}$/.test(formData.aadhaar)) {
      newErrors.aadhaar = 'Aadhaar must be a 12-digit number.';
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) {
      newErrors.pan = 'Invalid PAN format.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifscCode)) {
      newErrors.ifscCode = 'Invalid IFSC code format.';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required.';
    }

    if (!formData.branch) {
      newErrors.branch = 'Please select a bank branch.';
    }

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
    <div className="user-form-container">
      <h2>Welcome Dear Customer</h2>
      <h2>Create Account</h2>
     
      
      <form onSubmit={handleSubmit}>
        {/* Text Fields (Address moved to 2nd position) */}
        {[
          { label: 'Full Name', name: 'name', type: 'text' },
          { label: 'Address', name: 'address', type: 'text' },
          { label: 'Date of Birth', name: 'dob', type: 'date' },
          { label: 'Aadhaar Number', name: 'aadhaar', type: 'text' },
          { label: 'PAN Number', name: 'pan', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Phone Number', name: 'phone', type: 'text',placeholder:'Phone number registered with Aadhaar '},
          { label: 'IFSC Code', name: 'ifscCode', type: 'text' },
        ].map((field) => (
          <div key={field.name} className="form-group">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
               placeholder={field.placeholder || ''}
              value={formData[field.name]}
              onChange={handleChange}
              className={errors[field.name] ? 'input-error' : ''}
            />
            {errors[field.name] && <div className="error-message">{errors[field.name]}</div>}
          </div>
        ))}

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            {['Male', 'Female', 'Other'].map((option) => (
              <label key={option}>
                <input type="radio" name="gender" value={option}
                  checked={formData.gender === option}
                  onChange={handleChange}
                />{' '}
                {option}
              </label>
            ))}
          </div>
          {errors.gender && <div className="error-message">{errors.gender}</div>}
        </div>

        {/* Branch Dropdown */}
        <div className="form-group">
          <label>Select Bank</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className={errors.branch ? 'input-error' : ''}
          >
            <option value="">-- Select Branch --</option>
            {bankBranches.slice(1).map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
          {errors.branch && <div className="error-message">{errors.branch}</div>}
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default UserForm;
