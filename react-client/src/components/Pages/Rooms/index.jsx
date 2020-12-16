import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import room1 from '../../../assets/room1.jpg';
import room2 from '../../../assets/room2.jpg';
import './styles.css';
import Axios from 'axios';

// trying to call bookroom and ID
const Rooms = () => {
  const bookRoom = () => {
    Axios.get(`http://localhost:4000/bookRoom`, 1, 1)
      .then(({data}) => {
          console.log(data);
      })
      .catch(error => console.error(error.message));
  }
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
          <div class="row">
            <div class="column">
              <img src={room1}></img>
              <p>
                Enjoy a relaxing pool-side villa, all to you and your loved ones for only $249.99 / night. <br></br>
                <strong>Features:</strong> 8 bedrooms // 4 bathrooms // spa & pool // kitchen // great view
              </p>
              <br></br>
              <button>Book now!</button>
            </div>
            <div class="column">
              <img src={room2}></img>
              <p>
                This room boasts a luxurious apartment right across the Eiffel Tower, all to you and your loved ones for only $174.99 / night. <br></br>
                <strong>Features:</strong> 2 bedrooms // 1.5 bathrooms // breakfast // kitchen // washer & dryer // great view of the Eiffel Tower
              </p>
              <button onClick={bookRoom}>Book now!</button>
              <br></br>
              <br></br>
            </div>
          </div>
          <p><strong>We hope you enjoy your stay!</strong></p>
        </header>
      </Container>
    </>
  );
}
 
export default Rooms;