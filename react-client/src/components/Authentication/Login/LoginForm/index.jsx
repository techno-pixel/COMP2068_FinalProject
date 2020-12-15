import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserProvider';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
 
const LoginForm = () => {
  const [inputs, setInputs] = useState({});
  const { setUser } = useContext(UserContext);
 
  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };
 
  const handleSubmit = event => {
    event.preventDefault();
 
    if (inputs.email && inputs.password) {
      Axios.post(`http://localhost:4000/authenticate`, inputs)
      .then(({data}) => {
        setUser(data);
        localStorage.setItem('token', data.token);
      })
      .catch(error => console.error(error.message));
    }
  };
 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
 
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          onChange={handleChange}
        />
      </Form.Group>
 
      <Form.Group>
        <Button type="submit">Login</Button>
      </Form.Group>
    </Form>
  );
}
 
export default LoginForm;