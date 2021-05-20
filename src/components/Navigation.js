import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import '../styles.scss';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        exact
        to={routes.home}
      >
        Головна
      </NavLink>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        to={routes.contacts}
      >
        Контакти
      </NavLink>
    </nav>
  );
};

export default Navigation;
