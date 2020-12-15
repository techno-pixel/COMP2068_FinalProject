import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from './UserProvider';

import Login from './Login';

const Routes = () => {
  const { user } = useContext(UserContext);
  return (
    <Switch>
      <Route
        exact path="/login"
        component={() => {
          if (user) return (
            <Redirect to="/"/>
          );
          return <Login/>
        }}
      />
    </Switch>
  );
}
 
export default Routes;