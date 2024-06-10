import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [signInClicked, setSignInClicked] = useState(false);

  // Function to fetch characters
  const fetchCharacters = (url = 'https://swapi.dev/api/people') => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
        setNextPage(data.next);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  };

  // Handle sign-in logic
  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent default form submission
    setSignInClicked(true); 
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
          throw new Error('Invalid credentials');
        }
        return response.json();
      })
      .then(() => {
        fetchCharacters(); // Fetch characters if signin is successful
      })
      .catch((error) => {
        console.error('Sign-in error:', error.message);
      });
  };

  useEffect(() => {
    if (signInClicked && email && password) {
      fetchCharacters(); // Fetch characters only if Sign In button is clicked and email and password are not empty
    }
  }, [signInClicked, email, password]);

  return (
    <div className="container">
      <h2 className="heading">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>

      {signInClicked && email && password && ( // Display Characters list only if Sign In button is clicked and email and password are not empty
        <div className="characters mt-5">
          <h3>Characters List</h3>
          <div className="row">
            {characters.map((character, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                    className="card-img-top"
                    alt={character.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Height: {character.height}</p>
                    <p className="card-text">Mass: {character.mass}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {nextPage && (
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-secondary" onClick={() => fetchCharacters(nextPage)}>
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignIn;
