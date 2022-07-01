import Loading from 'Components/SharedComponents/Loading/Loading';
import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { tokenListener } from 'Components/helper/firebase';
import PrivateRoute from 'Components/routes/PrivateRoute';

const AdminRoutes = lazy(() => import('components/routes/admins'));
const AuthRoutes = lazy(() => import('components/routes/auth'));

const Routes = () => {
  useEffect(() => {
    tokenListener();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute path="/admins" role="ADMIN" component={AdminRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Redirect to="/auth" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
