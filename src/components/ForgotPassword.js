import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Handle forgot password logic using this.state.email
    console.log('Forgot Password:', this.state.email);
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
