import React from 'react';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';
import LoginForm from './LoginForm';
const Login = () => {
  return (
    <>
      <Header title="Login to be AWESOME">
        <p>
          Authentication provides the next level of experience!
        </p>
      </Header>
      <Container>
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;