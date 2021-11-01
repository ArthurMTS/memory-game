import { useEffect, useState } from "react";

import { Card } from "../Card";

import { api } from "../../services/api";
import { getRandomNumbers } from "../../services/getRandomNumbers";

import pokeball from '../../assets/pokeball.png';

import './styles.css';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  clicked: boolean;
};

export function Cardboard() {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);

  useEffect(() => {
    async function handleRequest() {
      const randomArr = getRandomNumbers(898, 12);

      const pkmArr = randomArr.map(async (pkmId) => {
        const result = await api.get(`${pkmId}`);

        const { id, name, sprites: { front_default } } = result.data;
  
        const pokemon = {
          id,
          name,
          sprite: front_default,
          clicked: false
        };

        return pokemon;
      });

      const pokemons = await Promise.all(pkmArr);
      setPokemons(pokemons);
    }

    handleRequest();
  }, []);

  return (
    <div id='cardboard'>
      <h2>Choose your pokémons</h2>
      <div id='cards'>
        {
          pokemons.length > 0 ?
            pokemons.map(({ id, name, sprite }) => <Card key={id} name={name} sprite={sprite} />) :
            <div id='loading'>
              <img src={pokeball} alt='pokeball icon' />
              Loading...
            </div>
        }
      </div>
    </div>
  );
}