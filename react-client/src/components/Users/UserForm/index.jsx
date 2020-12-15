import React from 'react';
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { UserContext } from '../../Authentication/UserProvider';
import { Redirect } from 'react-router-dom';
 
const UserForm = ({ endpoint, buttonLabel }) => {
    
  const { user, setUser } = useContext(UserContext);
 
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  
  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };
 
  const handleSubmit = async event => {
    event.preventDefault();
 
    if (inputs && inputs.email) {
      const { data } = await Axios.post(`http://localhost:4000/users`, {
        ...inputs,
        secret_token: (user && user.token)
      });
      
      if (data && data.token) setUser(data);
      setRedirect(true);
    }
  };
 
  return (
    redirect ? (
      <Redirect to="/profile"/>
    ) : (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleChange}
            required
            defaultValue={inputs.name}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            required
            defaultValue={inputs.email}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Email Confirmation</Form.Label>
          <Form.Control
            name="emailConfirmation"
            onChange={handleChange}
            required
            defaultValue={inputs.emailConfirmation}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={handleChange}
            required
            defaultValue={null}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            name="passwordConfirmation"
            type="password"
            onChange={handleChange}
            required
            defaultValue={null}
          />
        </Form.Group>
  
        <Form.Group>
          <Button type="submit">{ buttonLabel || "Register" }</Button>
        </Form.Group>
      </Form>
    )
  );
}
 
export default UserForm;