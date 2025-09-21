import { Navigate } from 'react-router-dom';
import { getToken } from '../helpers/auth';

export default function ProtectedRoute({ children }) {
  const token = getToken();
  if (!token) return <Navigate to="/" replace />;
  return children;
}
