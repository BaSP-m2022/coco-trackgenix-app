import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Home from 'Components/Home/Homepage';
import Layout from 'Components/Layout';

const homeRoutes = [
  { name: 'Sign Up', path: '/auth/signup' },
  { name: 'Log In', path: '/auth/login' }
];

const HomeRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={homeRoutes}>
      <Switch>
        <Route exact path={`${url}/`} component={Home} />
        <Redirect to={`${url}/`} />
      </Switch>
    </Layout>
  );
};

export default HomeRoutes;
