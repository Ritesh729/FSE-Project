
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Sidebar.css';
import {
  FaHome,
  FaUserShield,
  FaBox,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/admin-dashboard');
  };

  

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('adminToken');
      navigate('/');
    }
  };

  return (
    <div className="sidebar">
      <FaHome className="icon" title="Home" onClick={goToHome} />
      <FaUserShield className="icon" title="Add Admin" onClick={() => navigate('/admin/add')} style={{ cursor: 'pointer' }}/>
      {/* <FaBox className="icon" title="Add Category"  /> */}
      <FaBox
        className="icon"
        title="Add Category"
        onClick={() => navigate('/admin/add-category')} 
      />
      <FaPlus className="icon" title="Add Product" />
      <FaChartBar className="icon" title="Analytics" />
      <FaSignOutAlt className="icon" title="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Sidebar;
