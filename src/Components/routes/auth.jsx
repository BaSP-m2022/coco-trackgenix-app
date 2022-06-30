import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Layout from 'Components/Layout';
import NotAllowed from 'Components/Auth/NotAllowed';
import Loading from 'Components/SharedComponents/Loading/Loading';

const Home = lazy(() => import('Components/Home/Homepage'));
const SignUp = lazy(() => import('Components/Employees/FormEmployee'));
const Login = lazy(() => import('Components/Auth/Login'));

const authRoutes = [
  { path: '/auth/login', name: 'Login' },
  { path: '/auth/sign-up', name: 'Sign Up' },
  { path: '/auth/logout', name: 'Logout' }
];

const AuthRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={authRoutes}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={`${url}/login`} component={Login} />
          <Route path={`${url}`} component={Home} />
          <Route path={`${url}/login`} component={Login} />
          <Route path={`${url}/sign-up`} component={SignUp} />
          <Route path={`${url}/notAllowed`} component={NotAllowed} />
          <Redirect to={`${url}/home`} />
          <Route path={`${url}/notAllowed`} component={NotAllowed} />
          <Redirect to={`${url}/login`} />
        </Switch>
      </Suspense>
    </Layout>
  );
};
export default AuthRoutes;
