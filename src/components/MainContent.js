// components/MainContent.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="flex-grow p-6 bg-gray-100">
      <Outlet />
    </main>
  );
};

export default MainContent;
