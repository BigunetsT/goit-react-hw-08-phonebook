import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class AddContact extends Component {
  static propTypes = {
    INITIAL_STATE: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    onSubmit: PropTypes.func,
  };
  state = { ...INITIAL_STATE };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  handleSubmit = e => {
    const { name } = this.state;
    e.preventDefault();
    if (
      this.props.contacts
        .map(item => item.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { name, number } = this.state;
    return (
      <ContactForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        name={name}
        number={number}
        textBtn="Додати контакт"
      />
    );
  }
}
const mapStateToPrope = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToPrope, mapDispatchToProps)(AddContact);
