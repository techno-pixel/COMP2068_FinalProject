import React, { useContext } from 'react';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserProvider';

const Logout = () => {
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    // removes the token and redirects user to home with login and register
    const removeToken = () => {
        localStorage.removeItem('token');
        setUser(null);
        history.push("/");
    }

  return (
    <>
      <Header title="Logout of your account securely">
        <p>
          Thank you for visiting us! We hope you enjoyed your stay :)
        </p>
      </Header>
      <Container>
          <button onClick={removeToken}>Logout</button>
      </Container>
    </>
  );
}
 
export default Logout;