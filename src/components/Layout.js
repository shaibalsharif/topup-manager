import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileDrawer from './MobileDrawer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow h-screen">
        {/* Header */}
        <Header toggleDrawer={toggleDrawer} />

        {/* Mobile Drawer for smaller screens */}
        {isDrawerOpen && (
          <div className="lg:hidden">
            <MobileDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          </div>
        )}

        {/* Main Content with flex-grow to fill remaining space */}
        <main className="flex-grow overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
