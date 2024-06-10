import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    if (newPassword !== confirmPassword) {
      // Display an error message or alert for password mismatch
      console.log('Passwords do not match');
    } else {
      // Handle reset password logic using this.state.newPassword
      console.log('Reset Password:', newPassword);
      // Clear the form after successful submission
      this.setState({
        newPassword: '',
        confirmPassword: ''
      });
    }
  };

  render() {
    const { newPassword, confirmPassword } = this.state;
    return (
      <div>
        <h2>Reset Password</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
