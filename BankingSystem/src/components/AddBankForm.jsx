import React, { useState } from 'react';
import './AddBankForm.css';

const AddBankForm = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    
    branchAddress: '',
    managerName: '',
    ifscCode: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required.';
   

    if (!formData.branchAddress.trim()) newErrors.branchAddress = 'Branch address is required.';

    if (!formData.managerName.trim()) newErrors.managerName = 'Manager name is required.';

    if (!formData.ifscCode.trim()) newErrors.ifscCode = 'IFSC code is required.';
    else if (!/^[A-Z]{4}0\d{6}$/.test(formData.ifscCode)) newErrors.ifscCode = 'Invalid IFSC code format.';

    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required.';
    else if (!/^\d{10}$/.test(formData.contactNumber)) newErrors.contactNumber = 'Contact number must be 10 digits.';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Bank Branch Added Successfully!');
      console.log(formData);
      // Reset form
      setFormData({
        bankName: '',
        branchAddress: '',
        managerName: '',
        ifscCode: '',
        contactNumber: '',
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Add Bank</h2>
      <form onSubmit={handleSubmit}>
        <label>Bank Name:</label>
        <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} />
        {errors.bankName && <p className="error">{errors.bankName}</p>}

        

        <label>Bank Address:</label>
        <textarea name="branchAddress" value={formData.branchAddress} onChange={handleChange}></textarea>
        {errors.branchAddress && <p className="error">{errors.branchAddress}</p>}

        <label>Bank Manager Name:</label>
        <input type="text" name="managerName" value={formData.managerName} onChange={handleChange} />
        {errors.managerName && <p className="error">{errors.managerName}</p>}

        <label>IFSC Code:</label>
        <input type="text" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
        {errors.ifscCode && <p className="error">{errors.ifscCode}</p>}

        <label>Contact Number:</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}

        <button type="submit">Add Bank</button>
      </form>
    </div>
  );
};

export default AddBankForm;
