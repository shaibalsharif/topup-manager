// components/Header.js
import React from 'react';
import Avatar from './Avatar';
import { useDialog } from './Dialog';
import { useAuthContext } from '../context/AuthContext';
import { FiMenu } from 'react-icons/fi';

const Header = ({ toggleDrawer }) => {
  const { user, logout } = useAuthContext();
  const { openDialog } = useDialog();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleDrawer}>
          <FiMenu className="text-2xl" />
        </button>

        {/* User Profile */}
        <div className="flex items-center">
          <Avatar src="/placeholder-user.jpg" alt="User" className="ml-4" />
          <div className="relative">
            <button onClick={openDialog} className="ml-2 text-blue-500">
              Profile
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 hidden md:block">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
