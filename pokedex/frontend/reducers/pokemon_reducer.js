import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return merge(nextState, state, action.pokemon);
    case RECEIVE_POKEMON:
      merge(nextState, state);
      nextState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
