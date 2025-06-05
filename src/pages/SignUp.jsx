import React, { useState } from 'react';

function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }
    alert("Registered successfully!");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh',  background: 'linear-gradient(90deg,rgb(91, 104, 216) 0%, #beb8f3 100%)' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
