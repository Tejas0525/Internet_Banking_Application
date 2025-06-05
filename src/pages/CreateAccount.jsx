import React from 'react';

function CreateAccount() {
  return (
    <div>
      <h2>Create a Bank Account</h2>
      <form>
        <div className="mb-3">
          <label>Full Name</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Initial Deposit</label>
          <input type="number" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input type="tel" className="form-control" required />
        </div>
        <button className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
