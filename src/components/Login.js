import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(phoneNumber, password);
      toast.success('Logged in successfully!');
      navigate('/'); // Redirect to the dashboard
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
