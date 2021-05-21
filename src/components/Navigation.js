import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../routes';
import '../styles.scss';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const Navigation = ({ isAuthenticated }) => {
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
      {isAuthenticated && (
        <NavLink
          className="header__link"
          activeClassName="header__link-active"
          to={routes.contacts}
        >
          Контакти
        </NavLink>
      )}
    </nav>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};
export default connect(mapStateToProps)(Navigation);
