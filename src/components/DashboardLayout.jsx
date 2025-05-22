import React from 'react';
import Tabs from './Tabs'; // or use DashboardNav if that's your component
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Tabs />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
