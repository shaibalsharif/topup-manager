import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { useDialog } from './Dialog';

const Header = () => {
  const { openDialog } = useDialog();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
        <nav className="flex space-x-4">
          <Link to="/">Dashboard</Link>
          <Link to="/subvendors">Sub-vendors</Link>
          <Link to="/purchases">Purchases</Link>
          <Link to="/balance">Balance</Link>
          <Link to="/topup">Top-up</Link>
        </nav>
        <div className="flex items-center">
          <Avatar src="/placeholder-user.jpg" alt="User" className="ml-4" />
          <button onClick={openDialog} className="ml-2 text-blue-500">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
