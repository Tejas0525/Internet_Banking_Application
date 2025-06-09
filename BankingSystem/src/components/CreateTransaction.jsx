// CreateTransaction.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTransaction = () => {
  const [formData, setFormData] = useState({
    senderAccount: '',
    senderBank: '',
    receiverAccount: '',
    receiverBank: '',
    transactionType: '',
    amount: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.senderAccount) newErrors.senderAccount = 'Required';
    if (!formData.receiverAccount) newErrors.receiverAccount = 'Required';
    if (!formData.transactionType) newErrors.transactionType = 'Required';
    if (!formData.amount || Number(formData.amount) <= 0) newErrors.amount = 'Invalid amount';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const transaction = {
        ...formData,
        timestamp: new Date().toLocaleString(),
      };

      // Navigate to dashboard with transaction
      navigate('/customer-dashboard', { state: { transaction } });
    }
  };
 return (
    <div className="create-transaction-container">
      <h3>Create Transaction</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="senderAccount">Sender Account</label>
          <input
            type="text"
            id="senderAccount"
            name="senderAccount"
            value={formData.senderAccount}
            onChange={handleChange}
            placeholder="Enter sender account"
            className={errors.senderAccount ? "input-error" : ""}
          />
          {errors.senderAccount && (
            <div className="error-message">{errors.senderAccount}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="senderBank">Sender Bank</label>
          <input
            type="text"
            id="senderBank"
            name="senderBank"
            value={formData.senderBank}
            onChange={handleChange}
            placeholder="Enter sender bank"
            className={errors.senderBank ? "input-error" : ""}
          />
          {errors.senderBank && (
            <div className="error-message">{errors.senderBank}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="transactionType">Transaction Type</label>
          <select
            id="transactionType"
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
            className={errors.transactionType ? "input-error" : ""}
          >
            <option value="">Select Type</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
            <option value="Transfer">Transfer</option>
          </select>
          {errors.transactionType && (
            <div className="error-message">{errors.transactionType}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="receiverAccount">Receiver Account</label>
          <input
            type="text"
            id="receiverAccount"
            name="receiverAccount"
            value={formData.receiverAccount}
            onChange={handleChange}
            placeholder="Enter receiver account"
            className={errors.receiverAccount ? "input-error" : ""}
          />
          {errors.receiverAccount && (
            <div className="error-message">{errors.receiverAccount}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="receiverBank">Receiver Bank</label>
          <input
            type="text"
            id="receiverBank"
            name="receiverBank"
            value={formData.receiverBank}
            onChange={handleChange}
            placeholder="Enter receiver bank"
            className={errors.receiverBank ? "input-error" : ""}
          />
          {errors.receiverBank && (
            <div className="error-message">{errors.receiverBank}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            min="0"
            step="0.01"
            className={errors.amount ? "input-error" : ""}
          />
          {errors.amount && (
            <div className="error-message">{errors.amount}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Add a description"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Transaction
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;
