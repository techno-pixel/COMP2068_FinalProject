import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import Axios from 'axios';

const Profile = () => {
    const user = {}
    Axios.get(`http://localhost:4000/users`, )
      .then(({data}) => {
          console.log(data);
          user = data;
      })
      .catch(error => console.error(error.message));
      
    return (
      <>
        <Header>
          <p>
            Your profile
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
   
  export default Profile;