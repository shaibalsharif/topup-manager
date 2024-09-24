import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import SubVendors from './pages/SubVendors';
import Purchases from './pages/Purchases';
import Balance from './pages/Balance';
import TopUp from './pages/TopUp';
import { DialogProvider } from './components/Dialog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';

const App = () => {
  return (
    <DialogProvider>
      <Router>
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-6">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element ={<Login/>}/>
            <Route path="/subvendors" element={<SubVendors />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/topup" element={<TopUp />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </DialogProvider>
  );
};

export default App;
