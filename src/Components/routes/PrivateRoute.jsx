import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loading from 'Components/SharedComponents/Loading/Loading';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const role = useSelector((state) => state.auth.authenticated?.role);
  const isFetching = useSelector((state) => state.auth.isFetching);
  const error = useSelector((state) => state.auth.error);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (isFetching) {
          return <Loading />;
        }
        if (role === rest.role) {
          return <RouteComponent {...routeProps} />;
        }
        if (role && !error) {
          return <Redirect to={'/auth/NotAllowed'} />;
        }
        return <Redirect to={'/auth/NotAllowed'} />;
      }}
    />
  );
};

export default PrivateRoute;
