import Loading from 'Components/SharedComponents/Loading/Loading';
import { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from 'Components/routes/PrivateRoute';

const AdminRoutes = lazy(() => import('Components/routes/admins'));
const SuperAdminRoutes = lazy(() => import('Components/routes/super-admins'));
const EmployeeRoutes = lazy(() => import('Components/routes/employees'));
const AuthRoutes = lazy(() => import('Components/routes/auth'));
const HomeRoutes = lazy(() => import('Components/routes/Home'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/home" component={HomeRoutes} />
          <PrivateRoute path="/admins" role="ADMIN" component={AdminRoutes} />
          <PrivateRoute path="/super-admins" role="SUPERADMIN" component={SuperAdminRoutes} />
          <PrivateRoute path="/employee" role="EMPLOYEE" component={EmployeeRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default Routes;
