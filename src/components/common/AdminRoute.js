import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../state/AuthContext';
import { jwtDecode } from 'jwt-decode';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, token } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    if (decodedToken.user.role !== 'admin') {
      // If not an admin, redirect them to their own portal
      return <Navigate to="/portal/dashboard" replace />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;