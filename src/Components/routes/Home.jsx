import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Home from 'Components/Home/Homepage';
import Layout from 'Components/Layout';

const HomeRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${url}/`} component={Home} />
        <Redirect to={`${url}/`} />
      </Switch>
    </Layout>
  );
};

export default HomeRoutes;
