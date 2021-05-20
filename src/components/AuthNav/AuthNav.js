import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import '../../styles.scss';

const AuthNav = props => {
  return (
    <nav>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        exact
        to={routes.register}
      >
        Реєстрація
      </NavLink>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        to={routes.login}
      >
        Вхід
      </NavLink>
    </nav>
  );
};

export default AuthNav;
