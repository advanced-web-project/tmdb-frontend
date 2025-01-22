import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../context/store';
import { showError } from '../util/ErrorToastifyRender';

interface RouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: RouteProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated) {
    showError('You must be logged in to access this page');
    return <Navigate to="/tmdb-frontend/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
