import React from 'react';
import PageRoutes from '../../Pages/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import UserRoutes from '../../Users/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <AuthenticationRoutes/>
      <UserRoutes/>
    </>
  );
}
 
export default Routes;