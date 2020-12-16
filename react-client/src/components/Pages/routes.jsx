import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Rooms from './Rooms';
import Profile from './Profile';


const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/profile" component={Profile}/>
    </Switch>
  );
}
 
export default Routes;