// components/Layout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileDrawer from './MobileDrawer';
import MainContent from './MainContent';

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for Desktop */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header toggleDrawer={toggleDrawer} />

        {/* Main content (Outlet) */}
        <MainContent />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Layout;
