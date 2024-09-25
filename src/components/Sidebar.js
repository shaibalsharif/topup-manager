// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white shadow-md">
      <nav className="flex flex-col p-4 space-y-4">
        <Link to="/" className="text-lg font-medium">Dashboard</Link>
        <Link to="/subvendors" className="text-lg font-medium">Sub-vendors</Link>
        <Link to="/purchases" className="text-lg font-medium">Purchases</Link>
        <Link to="/balance" className="text-lg font-medium">Balance</Link>
        <Link to="/topup" className="text-lg font-medium">Top-up</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
