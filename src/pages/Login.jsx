import React from 'react';

function Login() {
  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '400px', marginTop: '80px' }}>
      <h3 className="text-center mb-3">Login to iBank</h3>
      <form>
        <div className="mb-3">
          <label>Account Number</label>
          <input className="form-control" type="text" required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input className="form-control" type="password" required />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
