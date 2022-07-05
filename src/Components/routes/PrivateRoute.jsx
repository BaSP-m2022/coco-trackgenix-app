import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loading from 'Components/SharedComponents/Loading/Loading';

const PrivateRoute = ({ component: RouteComponent, ...props }) => {
  const role = sessionStorage.getItem('role');
  const isFetching = useSelector((state) => state.isFetching);
  const error = useSelector((state) => state.error);

  return (
    <Route
      {...props}
      render={(routeProps) => {
        if (isFetching) {
          return <Loading />;
        }
        if (role === props.role) {
          return <RouteComponent {...routeProps} />;
        }
        if (role && !error) {
          return <Redirect to={'/auth/NotAllowed'} />;
        }
        return <Redirect to={'/home'} />;
      }}
    />
  );
};

export default PrivateRoute;
