import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserMenu.module.scss';

const UserMenu = ({ onLogout }) => {
  return (
    <div>
      <span class={styles.email}>Пошта користувача</span>
      <button type="button" class={styles.btn} onClick={onLogout}>
        Вийти
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  onLogout: PropTypes.func,
};

export default UserMenu;
