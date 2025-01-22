import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../context/store';

interface RouteProps {
  children: React.ReactNode;
}

function RedirectIfAuthenticated({ children }: RouteProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/tmdb-frontend" replace />;
  }
  return <>{children}</>;
}

export default RedirectIfAuthenticated;
