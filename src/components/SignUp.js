// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle sign-up logic
  const handleSignUp = () => {
    // Perform sign-up logic
    fetch('https://bhagyamfabackend.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Sign-up failed');
        }
        return response.json();
      })
      .then((data) => {
        // Successful sign-up
        console.log('User signed up successfully:', data);
        // Redirect to sign-in page or other route
        navigate('/signin');
      })
      .catch((error) => {
        // Sign-up error
        console.error('Sign-up error:', error.message);
        setError('Sign-up failed');
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
