import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import './styles.css';

type CardProps = {
  id: string;
};

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  clicked: boolean;
};

export function Card({ id }: CardProps) {
  const [pokemon, setPokemon] = useState({} as Pokemon);

  useEffect(() => {
    api.get(id).then(result => {
      const { id, name, sprites: { front_default } } = result.data;

      const pokemon = {
        id,
        name,
        sprite: front_default,
        clicked: false
      };

      setPokemon(pokemon);
    });
  });

  return (
    <div className='card'>
      <img className='sprite' src={pokemon.sprite} alt={pokemon.name} />
      <strong className='pokemon-name'>{pokemon.name}</strong>
    </div>
  );
}