import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  return (
    <Link to={`/pokemon/${props.pokemon.id}`} onClick={e => console.log(e)}>
      <li>
        <img src={props.pokemon.image_url} height ="20" width="20"/>
        {props.pokemon.name}
      </li>
    </Link>
  );
};
