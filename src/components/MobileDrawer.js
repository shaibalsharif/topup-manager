// components/MobileDrawer.js
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import  Dialog  from './Dialog';
import { FiX } from 'react-icons/fi';
import { useDialog } from './Dialog';
import { useAuthContext } from '../context/AuthContext';

const MobileDrawer = ({ isDrawerOpen, toggleDrawer }) => {
  const { user, logout } = useAuthContext();
  const { openDialog } = useDialog();

  return (
    <Dialog open={isDrawerOpen} onClose={toggleDrawer} className="md:hidden">
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50">
        <button onClick={toggleDrawer} className="p-4">
          <FiX className="text-2xl" />
        </button>
        <nav className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={toggleDrawer} className="text-lg font-medium">Dashboard</Link>
          <Link to="/subvendors" onClick={toggleDrawer} className="text-lg font-medium">Sub-vendors</Link>
          <Link to="/purchases" onClick={toggleDrawer} className="text-lg font-medium">Purchases</Link>
          <Link to="/balance" onClick={toggleDrawer} className="text-lg font-medium">Balance</Link>
          <Link to="/topup" onClick={toggleDrawer} className="text-lg font-medium">Top-up</Link>
        </nav>
        <div className="p-4">
          <div className="flex items-center">
            <Avatar src="/placeholder-user.jpg" alt="User" className="ml-4" />
            <div className="ml-2">
              <button className="text-blue-500" onClick={openDialog}>
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MobileDrawer;
