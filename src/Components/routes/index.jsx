import Loading from 'Components/SharedComponents/Loading/Loading';
import { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from 'Components/Routes/PrivateRoute';

const AdminRoutes = lazy(() => import('Components/Routes/admins'));
const AuthRoutes = lazy(() => import('Components/Routes/auth'));
const HomeRoutes = lazy(() => import('Components/Routes/Home'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/home" component={HomeRoutes} />
          <PrivateRoute path="/admins" role="ADMIN" component={AdminRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default Routes;
