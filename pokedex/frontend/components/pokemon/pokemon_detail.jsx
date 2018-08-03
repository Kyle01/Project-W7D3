import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonDetail extends React.Component {
  componentDidMount(){
  }

  render() {
    // const pokemonDetail = this.props.pokemon
    const pokemon = this.props.pokemon;
    return <div>{pokemon}</div>;
  }

}

export default PokemonDetail;
