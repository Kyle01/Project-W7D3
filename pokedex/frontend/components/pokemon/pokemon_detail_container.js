import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return ( {pokemon: state.entities.pokemon[id]});
};

export default connect(
  mapStateToProps
)(PokemonDetail);
