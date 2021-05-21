import PropTypes from 'prop-types';
import styles from './ContactItem.module.scss';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

const ContactItem = ({ id, name, number, onDelete, onUpdate }) => (
  <li name={name} number={number} className={styles.contactItem}>
    {name}:<span className={styles.phoneNumber}>{number}</span>
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
      onClick={() => onUpdate()}
    >
      Редагувати
    </button>
  </li>
);
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
