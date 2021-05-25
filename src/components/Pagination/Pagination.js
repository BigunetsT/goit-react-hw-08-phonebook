import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

class Pagination extends Component {
  state = {
    currentPage: 0,
  };
  prevContacts = () => {
    console.log('prev');
  };
  nextContacts = () => {
    console.log('next');
  };
  render() {
    return (
      <div className={styles.pagination}>
        <button
          type="button"
          className={styles.btn}
          onClick={this.prevContacts}
        >
          Prev
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={this.nextContacts}
        >
          Next
        </button>
      </div>
    );
  }
}

// Pagination.propTypes = {};

export default Pagination;
