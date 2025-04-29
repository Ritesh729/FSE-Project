


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './components/AdminLogin';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';

import AddAdminForm from './components/AddAdminForm';
import AddCategory from './components/AddCategory';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        
        

        {/* Admin Routes with Sidebar */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/add"
          element={
            <AdminLayout>
              <AddAdminForm />
            </AdminLayout>
          }
        />

        {/* <Route
          path="/products"
          element={
            <AdminLayout>
              <Products />
            </AdminLayout>
          }
        /> */}
        
      <Route 
        path="/admin/add-category" 
        element={
          <AdminLayout>
            <AddCategory />
          </AdminLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
