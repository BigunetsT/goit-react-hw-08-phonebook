import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import '../styles.scss';

class RegisterPage extends Component {
  static propTypes = {
    state: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
    onSubmit: PropTypes.func,
  };
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="container">
        <h1 className="title">Сторінка реєстрації</h1>
        <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
          <label className="label">
            Ім'я
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className="label">
            Пошта
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="label">
            Пароль
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className="btn">
            Зареєструватися
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
