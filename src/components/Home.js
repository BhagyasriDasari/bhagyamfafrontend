import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
        <div className="container">
        <h1 className="heading">Welcome to My MERN App</h1>
        <p className="paragraph">Please sign in or sign up to continue.</p>
        <div className="mb-3">
          <Link to="/signin">
            <button className="button button-yellow me-3">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="button button-tertiary">Sign Up</button>
          </Link>
        </div>
      </div>
      
    );
  }
}

export default Home;
