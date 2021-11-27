import React from 'react';
import Button from 'react-bootstrap/Button';
import {useAuth0} from '@auth0/auth0-react';

function LoginButtonAuth0() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <Button variant="secondary" size="sm" onClick={loginWithRedirect}>Log in</Button>
  );
}

export default LoginButtonAuth0;
