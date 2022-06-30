import Loading from 'Components/SharedComponents/Loading/Loading';
import { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

const AdminRoutes = lazy(() => import('components/routes/admins'));
const AuthRoutes = lazy(() => import('components/routes/auth'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/admins" component={AdminRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Redirect to="/auth" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
