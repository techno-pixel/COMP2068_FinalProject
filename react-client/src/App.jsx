import React from 'react';
import UserProvider from './components/Authentication/UserProvider';
 
import Navigation from './components/shared/Navigation';
import Routes from './components/shared/Routes';
import { BrowserRouter } from 'react-router-dom';
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navigation/>
        <Routes/>
      </BrowserRouter>
    </UserProvider>
  );
};
 
export default App;