import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux';
import { contactsOperations } from '../redux/contacts';

import '../styles.scss';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <h1 className="title">Додати контакт: </h1>
        <ContactForm />
        <h2 className="title">Контакти</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsPage);
