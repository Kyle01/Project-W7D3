import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPokemon, requestPokemon, RECEIVE_POKEMON, receivePokemon} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const storeEl = configureStore();
  ReactDOM.render(<Root store ={storeEl} />, rootEl);

  //testing
  window.fetchPokemon = fetchPokemon;
  window.requestPokemon = requestPokemon;
  window.dispatch = storeEl.dispatch;
});
