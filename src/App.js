import React, { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import routes from './routes';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    return (
      <>
        <Container>
          <AppBar />
          <Suspense fallback={<h1>Завантаження...</h1>}>
            <Switch>
              <PublicRoute exact path={routes.home} component={HomePage} />
              <PublicRoute
                path={routes.login}
                restricted
                redirectTo={routes.contacts}
                component={LoginPage}
              />
              <PublicRoute
                path={routes.register}
                restricted
                redirectTo={routes.contacts}
                component={RegisterPage}
              />
              <PrivateRoute
                path={routes.contacts}
                redirectTo={routes.login}
                component={ContactsPage}
              />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
