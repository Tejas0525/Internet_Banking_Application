import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const schema = yup.object().shape({
  role: yup.string().required('Role is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function AdminLogin() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const selectedRole = watch('role');  // ✅ Use after useForm
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    const { role, email, password } = data;

    if (role === 'admin' && email === 'admin@bank.com' && password === 'password123') {
      alert('Admin Login successful!');
      navigate('/admin-dashboard');
    } else if (role === 'manager' && email === 'manager@bank.com' && password === 'password123') {
      alert('Manager Login successful!');
      navigate('/manager-dashboard');
    } else if (role === 'User') {
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
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Role</label>
          <select {...register('role')}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">Customer</option>
          </select>
          <p className="error">{errors.role?.message}</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="text" {...register('email')} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register('password')} />
          <p className="error">{errors.password?.message}</p>
        </div>

        <button type="submit">Login</button>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        {selectedRole === 'user' && (
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to="/register">New User? Create an Account</Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default AdminLogin;
