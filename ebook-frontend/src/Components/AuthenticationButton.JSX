import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
      {isAuthenticated && <p>Hello, {user.name}</p>}
    </div>
  );
};

export default AuthenticationButton;
