import React, { useState, useEffect } from 'react';
import './TransactionPage.css';

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
  const [userAccounts, setUserAccounts] = useState([]);
  const [allAccounts, setAllAccounts] = useState([]);
  const [userId] = useState('123'); // Normally from login/auth context
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  useEffect(() => {
    // Fetch user accounts
    fetch(`/api/accounts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAccounts(data);
        if (data.length === 1) {
          const account = data[0];
          setFormData((prev) => ({
            ...prev,
            senderAccount: account.account_number,
            senderBank: account.bank,
          }));
        }
      })
      .catch((err) => console.error('Failed to fetch user accounts', err));

    // Fetch all accounts
    fetch('/api/accounts/all')
      .then((res) => res.json())
      .then((data) => setAllAccounts(data))
      .catch((err) => console.error('Failed to fetch all accounts', err));
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'senderAccount') {
      const selected = userAccounts.find(acc => acc.account_number === value);
      setFormData({
        ...formData,
        senderAccount: value,
        senderBank: selected ? selected.bank : '',
      });
    } else if (name === 'receiverAccount') {
      const selected = allAccounts.find(acc => acc.account_number === value);
      setFormData({
        ...formData,
        receiverAccount: value,
        receiverBank: selected ? selected.bank : '',
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.senderAccount) newErrors.senderAccount = 'Select sender account.';
    if (!formData.transactionType) newErrors.transactionType = 'Select transaction type.';
    if (!formData.receiverAccount) newErrors.receiverAccount = 'Select receiver account.';
    if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Enter valid amount.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactionSuccess(false);
    if (validate()) {
      // Here you can send formData to backend API
      console.log('Transaction Data:', formData);
      setTransactionSuccess(true);
    }
  };

  return (
    <div className="transaction-container">
      <h2>Transaction</h2>

      {userAccounts.length === 0 ? (
        <div className="no-account-message">
          <p>You need to create an account before making a transaction.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Sender Account */}
          <div className="form-group">
            <label>Sender Account Number:</label>
            <select
              name="senderAccount"
              value={formData.senderAccount}
              onChange={handleChange}
              className={errors.senderAccount ? 'input-error' : ''}
            >
              <option value="">-- Select your account --</option>
              {userAccounts.map(acc => (
                <option key={acc.account_number} value={acc.account_number}>
                  {acc.account_number} - {acc.bank}
                </option>
              ))}
            </select>
            {errors.senderAccount && <div className="error-message">{errors.senderAccount}</div>}
          </div>

          {/* Sender Bank (readonly) */}
          <div className="form-group">
            <label>Bank:</label>
            <input type="text" value={formData.senderBank} readOnly />
          </div>

          {/* Transaction Type */}
          <div className="form-group">
            <label>Transaction Type:</label>
            <select
              name="transactionType"
              value={formData.transactionType}
              onChange={handleChange}
              className={errors.transactionType ? 'input-error' : ''}
            >
              <option value="">-- Select --</option>
              <option value="Deposit">Deposit</option>
              <option value="Withdraw">Withdraw</option>
              <option value="Transfer">Self Transfer</option>
            </select>
            {errors.transactionType && <div className="error-message">{errors.transactionType}</div>}
          </div>

          {/* Receiver Account Number */}
          <div className="form-group">
            <label>Receiver Account Number:</label>
            {formData.transactionType === 'Transfer' ? (
              <select
                name="receiverAccount"
                value={formData.receiverAccount}
                onChange={handleChange}
                className={errors.receiverAccount ? 'input-error' : ''}
              >
                <option value="">-- Select receiver --</option>
                {userAccounts
                  .filter(acc => acc.account_number !== formData.senderAccount)
                  .map(acc => (
                    <option key={acc.account_number} value={acc.account_number}>
                      {acc.account_number} - {acc.bank}
                    </option>
                  ))}
              </select>
            ) : (
              <input
                type="text"
                name="receiverAccount"
                value={formData.receiverAccount}
                onChange={handleChange}
                placeholder="Enter receiver account number"
                className={errors.receiverAccount ? 'input-error' : ''}
              />
            )}
            {errors.receiverAccount && (
              <div className="error-message">{errors.receiverAccount}</div>
            )}
          </div>

          {/* Amount */}
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className={errors.amount ? 'input-error' : ''}
            />
            {errors.amount && <div className="error-message">{errors.amount}</div>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description (optional):</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Create Transaction</button>
        </form>
      )}

      {transactionSuccess && (
        <div className="success-message" style={{ marginTop: '20px', color: 'green' }}>
          ✅ Transaction Successful!
        </div>
      )}
    </div>
  );
};

export default CreateTransaction;
