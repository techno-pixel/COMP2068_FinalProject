import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import UserForm from '../UserForm';
const New = () => {
  return (
    <>
      <Header title="Register to become a member">
        <p>
          Register to become a member
        </p>
      </Header>
      <Container>
        <UserForm buttonLabel="Register"/>
      </Container>
    </>
  );
}
 
export default New;