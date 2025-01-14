import { useAuth } from '../context/auth-context';
import { Navigate } from 'react-router-dom';

interface RouteProps {
  children: React.ReactNode;
}

function RedirectIfAuthenticated({ children }: RouteProps) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

export default RedirectIfAuthenticated;
