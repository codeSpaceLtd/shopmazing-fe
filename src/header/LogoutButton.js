import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useAuth0} from "@auth0/auth0-react";

const LogoutButton = () => {
  const {logout} = useAuth0();

  return (
    <Container><Button size="sm" variant="secondary" onClick={() => logout({returnTo: window.location.origin})}>Logout</Button></Container>
  );
};

export default LogoutButton;
