import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
 
const Home = () => {
  return (
    <>
      <Header>
        <p>
          The <strong>m</strong>assively <strong>o</strong>ganized <strong>f</strong>un <strong>o</strong>nline gaming experience!
        </p>
      </Header>
 
      <Container>
        <hr/>
 
        <header>
          <h2>MOFO Games are simple games <strong>HYPEFIED</strong> with the integration of support for massive multiplayer integration!</h2>
          <p>This sh*t's going to be lit AF!</p>
        </header>
      </Container>
    </>
  );
}
 
export default Home;