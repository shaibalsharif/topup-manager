import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="mt-4">
        <Link to="/" className="block px-4 py-2 text-gray-700">Dashboard</Link>
        <Link to="/sub-vendors" className="block px-4 py-2 text-gray-700">Sub-vendors</Link>
        <Link to="/purchases" className="block px-4 py-2 text-gray-700">Purchases</Link>
        <Link to="/balance" className="block px-4 py-2 text-gray-700">Balance</Link>
        <Link to="/top-up" className="block px-4 py-2 text-gray-700">Top-up</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
