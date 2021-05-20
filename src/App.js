import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import routes from './routes';

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
  render() {
    return (
      <>
        <AppBar isAuthenticated={true} />
        <Container>
          <Suspense fallback={<h1>Загружаем...</h1>}>
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route path={routes.contacts} component={ContactsPage} />
              <Route path={routes.login} component={LoginPage} />
              <Route path={routes.register} component={RegisterPage} />
              {/* <Redirect to={routes.home} /> */}
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

export default App;
