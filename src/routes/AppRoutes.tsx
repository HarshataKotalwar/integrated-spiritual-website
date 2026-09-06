import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

import ProtectedRoute from './ProtectedRoute';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import VerifyEmailPage from '../features/auth/VerifyEmailPage';
import ForgotPasswordPage from '../features/auth/ForgotPasswordPage';
import ResetPasswordPage from '../features/auth/ResetPasswordPage';

import DashboardPage from '../features/dashboard/DashboardPage';
import AdminDashboardPage from '../features/dashboard/admin/AdminDashboardPage';
import MentorDashboardPage from '../features/dashboard/mentor/MentorDashboardPage';

import EventsPage from '../features/events/pages/EventsPage';
import AdminEventsPage from '../features/events/pages/AdminEventsPage';
import AdminCreateEventPage from '../features/events/pages/AdminCreateEventPage';

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public website routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Authentication routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<AuthLayout />}>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>

      {/* User protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      {/* Admin routes */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/events" element={<AdminEventsPage />} />
        <Route path="/admin/events/create" element={<AdminCreateEventPage />} />
      </Route>

      {/* Mentor routes */}
      <Route element={<ProtectedRoute allowedRoles={['mentor']} />}>
        <Route path="/mentor" element={<MentorDashboardPage />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;