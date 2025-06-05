import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const schema = yup.object().shape({
  role: yup.string().required('Role is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function AdminLogin() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const selectedRole = watch('role');
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    const { role, email, password } = data;

    if (role === 'admin' && email === 'admin@bank.com' && password === 'password123') {
      alert('Admin Login successful!');
      navigate('/admin-dashboard');
    } else if (role === 'manager' && email === 'manager@bank.com' && password === 'password123') {
      alert('Manager Login successful!');
      navigate('/manager-dashboard');
    } else if (role === 'user') {
      try {
        const res = await fetch(`/api/users/exists?email=${encodeURIComponent(email)}`);
        const result = await res.json();

        if (result.exists && password === 'password123') {
          alert('User Login successful!');
          navigate('/transaction');
        } else {
          alert('Invalid user credentials or account does not exist.');
        }
      } catch (err) {
        alert('Error checking user account.');
        console.error(err);
      }
    } else {
      alert('Invalid credentials or role');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select id="role" className={`form-select ${errors.role ? 'is-invalid' : ''}`} {...register('role')}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">Customer</option>
          </select>
          <div className="invalid-feedback">{errors.role?.message}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            {...register('password')}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>

        <div className="text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        {selectedRole === 'user' && (
          <div className="text-center mt-2">
            <Link to="/register">New User? Create an Account</Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default AdminLogin;
