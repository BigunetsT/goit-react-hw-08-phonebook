import React, { Component } from 'react';
import AddContact from '../components/AddContact';
import { Button } from 'react-bootstrap';
import Modal from '../components/Modal';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux';
import { contactsOperations } from '../redux/contacts';
import { contactsSelectors } from '../redux/contacts';
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
      <div className="container-page container-page__contacts">
        <h1 className="title">Контакти</h1>
        <div className="contacts">
          <div className="contacts-operations">
            <h3 className="contacts-count">
              Всього контактів:{' '}
              <span className="contacts-count__value">
                {this.props.contactsCount}
              </span>
            </h3>
            <Button
              variant="secondary"
              onClick={this.openModal}
              className="addBtn"
            >
              Додати контакт
              <svg
                className="addBtnImg"
                id="_x31__px"
                enableBackground="new 0 0 24 24"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9.02 21h-6.52c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v6.06c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6.06c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h6.52c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m9.5 13h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m8.5 5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z" />
                <path d="m17.5 21c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z" />
                <path d="m20.5 18h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z" />
              </svg>
            </Button>
            {this.state.showModal && (
              <Modal onClose={this.closeModal}>
                <AddContact />
              </Modal>
            )}
            <Filter />
          </div>
          <div className="contacts-info">
            <ContactList className="contacts-list" />
            {/* <div className="pagination">Pagination</div> */}
          </div>
        </div>
        <div className="footer">GoIt-2021 React#27</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contactsCount: contactsSelectors.getContactsCount(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
