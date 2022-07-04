import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from 'Components/Layout/layout.module.css';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Header from 'Components/Header/Header';
import NavBar from 'Components/NavBar/NavBar';
import Footer from 'Components/Footer/Footer';
import Home from 'Components/Home/Homepage';
import Navigation from 'Components/Navigation';
import Login from 'Components/Auth/Login/Login';
import AdminRoutes from 'Components/routes/admins';
import PrivateRoute from 'Components/routes/PrivateRoute';

function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <NavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <PrivateRoute exact path="/admins" role={'ADMIN'} component={AdminRoutes} />
            <Route exact path="/nav" component={Navigation} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home}>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default Layout;
