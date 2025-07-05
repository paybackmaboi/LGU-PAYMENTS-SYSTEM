import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import CitizenLayout from './layouts/CitizenLayout';
import ProtectedRoute from './components/common/ProtectedRoute';

// Import your pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ServiceCatalogPage from './pages/ServiceCatalogPage';
import DashboardPage from './pages/DashboardPage';
import NewApplicationPage from './pages/NewApplicationPage';
import ApplicationHistoryPage from './pages/ApplicationHistoryPage';
import ProfilePage from './pages/ProfilePage';
import AdminLayout from './layouts/AdminLayout';
import AdminRoute from './components/common/AdminRoute';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageApplicationsPage from './pages/admin/ManageApplicationsPage';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<ServiceCatalogPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Citizen Portal Routes */}
        <Route
          path="/portal"
          element={<ProtectedRoute><CitizenLayout /></ProtectedRoute>}
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="new-application" element={<NewApplicationPage />} />
          <Route path="history" element={<ApplicationHistoryPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Admin Portal Routes */}
        <Route
          path="/admin"
          element={<AdminRoute><AdminLayout /></AdminRoute>}
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="applications" element={<ManageApplicationsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;