import React, { Component } from 'react';
import AddContact from '../components/AddContact';
import { Button } from 'react-bootstrap';
import Modal from '../components/Modal';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux';
import { contactsOperations } from '../redux/contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';

class ContactsPage extends Component {
  state = {
    showModal: false,
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className="container-page">
        <h1 className="title">Контакти</h1>
        <div className="contacts">
          <div className="contacts-operations">
            <Button
              variant="secondary"
              onClick={this.openModal}
              className="addBtn"
            >
              Додати контакт
            </Button>
            {this.state.showModal && (
              <Modal onClose={this.closeModal}>
                <AddContact />
              </Modal>
            )}
            <Filter />
          </div>
          <ContactList className="contacts-list" />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsPage);
