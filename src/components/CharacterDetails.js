import React, { Component } from 'react';
import axios from 'axios';

class CharacterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchCharacter(id);
  }

  fetchCharacter = async (characterId) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${characterId}`);
      this.setState({ character: response.data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { character, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Character Details</h2>
        <p>Name: {character.name}</p>
        <p>Height: {character.height}</p>
        <p>Gender: {character.gender}</p>
        {/* Add more details as needed */}
      </div>
    );
  }
}

export default CharacterDetails;
