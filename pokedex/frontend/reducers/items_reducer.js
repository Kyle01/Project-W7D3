import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_POKEMON:
      merge(nextState, state);
      nextState[action.pokemon.item] = action.pokemon.items;
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
