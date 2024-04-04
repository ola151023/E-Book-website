import { Navigate, useLocation } from "react-router";
import { useAuth0 } from '@auth0/auth0-react';
const RequireAuth = ({ children }) => {
  let auth = useAuth0();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;