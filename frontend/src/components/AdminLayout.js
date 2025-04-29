
import React from 'react';
import Sidebar from './Sidebar';
import './styles/AdminLayout.css';

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
