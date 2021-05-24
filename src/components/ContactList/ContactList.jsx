import styles from './ContactList.module.scss';
import ContactItem from '../ContactItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import popTransition from './transitions/pop.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul" className={styles.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={200} classNames={popTransition}>
        <ContactItem id={id} name={name} number={number} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};
const mapStateToProps = state => ({
  contacts: contactsSelectors.getSortContacts(state),
});

export default connect(mapStateToProps)(ContactList);
