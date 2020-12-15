import React from 'react';
import { Route, Switch } from 'react-router-dom';
import New from './New';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/register" component={New}/>
    </Switch>
  );
}
 
export default Routes;
