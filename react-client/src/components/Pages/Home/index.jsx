import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
 
const Home = () => {
  return (
    <>
      <Header>
        <p>
          The most luxurious and affordable BnB on the market!
        </p>
      </Header>
 
      <Container>
        <hr/>
 
        <header>
          <p><strong>We hope you enjoy your stay!</strong></p>
        </header>
      </Container>
    </>
  );
}
 
export default Home;