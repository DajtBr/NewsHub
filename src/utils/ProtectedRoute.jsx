
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  
  const adminToken = localStorage.getItem('adminToken');

  if (!adminToken) {
    
    return <Navigate to="/admin/login" replace />;
  }

  
  return <Outlet />;
};

export default ProtectedRoute;