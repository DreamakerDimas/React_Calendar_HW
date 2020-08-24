// Login Form

import React, { Component } from 'react';
import { isEmail } from 'validator';
import { render } from '@testing-library/react';
import styles from './LoginForm.module.css';

//Minimum eight characters, at least one uppercase letter,
//one lowercase letter and one number:
const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      isValidEmail: false,
      isValidPass: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ userEmail: event.target.value });
    this.setState({
      isValidEmail: this.validateEmail(),
    });
  };
  handlePasswordChange = (event) => {
    this.setState({ userPassword: event.target.value });
    this.setState({
      isValidPass: this.validatePassword(),
    });
  };

  validateEmail = () => {
    const { userEmail } = this.state;
    return isEmail(userEmail);
  };

  validatePassword = () => {
    const { userPassword } = this.state;
    return passRegex.test(userPassword);
  };
  /*
  handleCommonChange = ({target: {name, value}}) => {
      this.setState({ [name]: value}); 
  }
*/

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { userEmail, userPassword, isValidEmail, isValidPass } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          style={
            isValidEmail
              ? { backgroundColor: 'rgba(0, 180, 0, 0.5)' }
              : { backgroundColor: 'rgba(180,0,0,0.5)' }
          }
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={this.handleEmailChange}
          placeholder="user email"
          className={styles.input}
        />
        <input
          style={
            isValidPass
              ? { backgroundColor: 'rgba(0, 180, 0, 0.5)' }
              : { backgroundColor: 'rgba(180,0,0,0.5)' }
          }
          className={this.passStyles}
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={this.handlePasswordChange}
          placeholder="user pass"
          className={styles.input}
        />
        <button type="submit"> LOGIN</button>
      </form>
    );
  }
}
export default FormLogin;
