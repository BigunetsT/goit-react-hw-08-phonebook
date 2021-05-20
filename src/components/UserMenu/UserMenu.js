import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserMenu.module.scss';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div>
      <span class={styles.email}>{email}</span>
      <button type="button" class={styles.btn} onClick={onLogout}>
        Вийти
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func,
};
const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
