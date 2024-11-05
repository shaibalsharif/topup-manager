import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Login from '../components/Login';
import SubVendors from '../pages/SubVendors';
import Purchases from '../pages/Purchases';
import Balance from '../pages/Balance';
import TopUp from '../pages/TopUp';
import 'react-toastify/dist/ReactToastify.css';
import Register from '../components/Register';

const RouterComponent = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="subvendors" element={<SubVendors />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="balance" element={<Balance />} />
          <Route path="topup" element={<TopUp />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
