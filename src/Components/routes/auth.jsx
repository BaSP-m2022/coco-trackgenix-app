import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Layout from 'Components/Layout';
import NotAllowed from 'Components/Auth/NotAllowed';
import Loading from 'Components/SharedComponents/Loading/Loading';

const SignUp = lazy(() => import('Components/Employees/FormEmployee/FormEmployee'));
const Login = lazy(() => import('Components/Auth/Login/Login'));

const AuthRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={`${url}/login`} component={Login} />
          <Route path={`${url}/sign-up`} component={SignUp} />
          <Route path={`${url}/notAllowed`} component={NotAllowed} />
          <Redirect to={`${url}`} />
        </Switch>
      </Suspense>
    </Layout>
  );
};
export default AuthRoutes;
