import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.scss';
import Modal from '../Modal';
import UpdateContact from '../UpdateContact';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

class ContactItem extends Component {
  state = {
    showModal: false,
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { id, name, number, onDelete } = this.props;
    return (
      <li name={name} number={number} className={styles.contactItem}>
        <div className={styles.contactData}>
          <span className={styles.name}>{name} :</span>
          <span className={styles.phoneNumber}>{number}</span>
        </div>
        <div className={styles.contactOperations}>
          <button
            type="button"
            className={styles.contactBtn}
            onClick={() => onDelete(id)}
          >
            Видалити
          </button>
          <button
            type="button"
            className={styles.contactBtn}
            onClick={() => this.openModal()}
          >
            Редагувати
          </button>
          {this.state.showModal && (
            <Modal onClose={this.closeModal}>
              <UpdateContact name={name} number={number} id={id} />
            </Modal>
          )}
        </div>
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});
export default connect(null, mapDispatchToProps)(ContactItem);
