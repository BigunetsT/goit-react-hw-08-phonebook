import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../routes';
import '../styles.scss';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className="nav">
      <Link to={routes.home}>
        <svg
          className="logo"
          id="Capa_1"
          enableBackground="new 0 0 512 512"
          height="30"
          viewBox="0 0 512 512"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m396.425 7.5c-18.888 0-306.21 0-324.5 0-12.787 0-23.152 10.366-23.152 23.152v428.187l370.805-45.661v-382.526c-.001-12.786-10.367-23.152-23.153-23.152z"
              fill="#9dc6fb"
            />
            <path
              d="m396.425 7.5c-3.073 0-13.255 0-28.223 0 12.786 0 23.152 10.366 23.152 23.152v382.526l13.063 7.5 15.16-7.5v-382.526c0-12.786-10.366-23.152-23.152-23.152z"
              fill="#80b4fb"
            />
            <path
              d="m124.219 7.5h-52.295c-12.787 0-23.152 10.366-23.152 23.152v428.187l75.447-10.414z"
              fill="#26457d"
            />
            <path
              d="m419.577 413.179h-341.235c-16.331 0-29.57 13.239-29.57 29.57v32.182c0 16.331 13.239 29.57 29.57 29.57h318.082c12.787 0 23.152-10.366 23.152-23.152v-68.17z"
              fill="#f9f6f6"
            />
            <path
              d="m391.41 413.179v68.169c0 12.787-10.365 23.152-23.152 23.152h28.167c12.786 0 23.152-10.366 23.152-23.152v-68.169z"
              fill="#dddaec"
            />
            <path
              d="m463.228 139.585h-43.651v-76.416h31.777c6.558 0 11.874 5.316 11.874 11.874z"
              fill="#ffe07d"
            />
            <path d="m419.577 63.169h21.825v76.416h-21.825z" fill="#ffd064" />
            <path d="m419.577 139.585h43.651v76.416h-43.651z" fill="#95d6a4" />
            <path d="m419.577 139.585h21.825v76.416h-21.825z" fill="#78c2a4" />
            <path d="m419.577 216h43.651v76.416h-43.651z" fill="#e7a561" />
            <path d="m419.577 216h21.825v76.416h-21.825z" fill="#e49542" />
            <path
              d="m451.354 368.831h-31.777v-76.416h43.651v64.542c0 6.558-5.316 11.874-11.874 11.874z"
              fill="#df73c1"
            />
            <path d="m419.577 292.416h21.825v76.416h-21.825z" fill="#dd4fb1" />
            <path
              className="logo-phone"
              d="m263.113 213.681-53.471-53.471c-2.391-2.391-6.267-2.391-8.658 0l-12.023 12.023c-17.953 17.953-17.953 47.061 0 65.014l99.288 99.288c17.953 17.953 47.061 17.953 65.014 0l12.023-12.023c2.391-2.391 2.391-6.267 0-8.658l-53.471-53.471c-2.391-2.391-6.267-2.391-8.657 0l-10.777 10.777c-5.149 5.149-13.498 5.149-18.648 0l-21.397-21.397c-5.149-5.149-5.149-13.498 0-18.648l10.777-10.777c2.391-2.391 2.391-6.267 0-8.657z"
              fill="#f9f6f6"
            />
            <g>
              <path d="m94.066 451.89h280.217c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-280.217c-4.143 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z" />
              <path d="m94.066 480.789h280.217c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-280.217c-4.143 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z" />
              <path d="m451.354 55.669h-24.277v-25.017c0-16.902-13.751-30.652-30.652-30.652h-187.432c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h187.432c8.631 0 15.652 7.021 15.652 15.652v375.026h-280.358v-390.678h47.287c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-107.081c-16.902 0-30.653 13.75-30.653 30.652v444.278c0 20.44 16.63 37.07 37.07 37.07h257.185c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-257.184c-12.17 0-22.07-9.9-22.07-22.07v-32.182c0-12.17 9.9-22.07 22.07-22.07h333.734v60.67c0 8.631-7.021 15.652-15.652 15.652h-30.91c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h30.91c16.901 0 30.652-13.751 30.652-30.652v-105.016h24.277c10.683 0 19.374-8.691 19.374-19.374v-281.915c0-10.683-8.691-19.374-19.374-19.374zm-395.082 357.316v-382.333c0-8.631 7.022-15.652 15.653-15.652h44.794v390.678h-38.376c-8.263 0-15.9 2.719-22.071 7.307zm399.456-204.485h-28.651v-61.416h28.651zm-28.651 15h28.651v61.416h-28.651zm24.277-152.831c2.412 0 4.374 1.962 4.374 4.374v57.042h-28.651v-61.416zm4.374 286.289c0 2.412-1.962 4.374-4.374 4.374h-24.277v-61.416h28.651z" />
              <path d="m313.577 59.943c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-84.578c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z" />
              <path d="m193.999 106.269h154.578c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-154.578c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z" />
              <path d="m293.552 331.231-49.273-49.273c-2.93-2.928-7.678-2.928-10.607 0-2.929 2.93-2.929 7.678 0 10.607l49.273 49.273c20.851 20.85 54.772 20.848 75.622 0l12.023-12.023c5.311-5.312 5.311-13.953 0-19.265l-53.472-53.472c-2.573-2.572-5.994-3.989-9.632-3.989-3.639 0-7.06 1.417-9.633 3.989l-10.777 10.777c-2.218 2.217-5.824 2.217-8.04 0l-21.397-21.396c-2.217-2.217-2.217-5.824 0-8.041l10.777-10.777c2.572-2.573 3.989-5.993 3.989-9.632s-1.417-7.059-3.989-9.632l-53.472-53.472c-5.312-5.312-13.952-5.31-19.265 0l-12.023 12.023c-20.849 20.849-20.849 54.772 0 75.621l28.797 28.797c2.93 2.928 7.678 2.928 10.607 0 2.929-2.93 2.929-7.678 0-10.607l-28.797-28.796c-15.001-15-15.001-39.407 0-54.408l11.049-11.049 51.521 51.522-9.803 9.803c-8.065 8.065-8.065 21.188 0 29.254l21.397 21.397c8.067 8.065 21.189 8.063 29.255 0l9.803-9.803 51.521 51.521-11.049 11.049c-14.996 15.003-39.404 15.005-54.405.002z" />
            </g>
          </g>
        </svg>
      </Link>
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
