import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import routes from './routes';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

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
              <Route exact path={routes.home} component={HomePage} />
              <Route path={routes.contacts} component={ContactsPage} />
              <Route path={routes.login} component={LoginPage} />
              <Route path={routes.register} component={RegisterPage} />
              <Redirect to={routes.home} />
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
