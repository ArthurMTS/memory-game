import { useContext, useEffect, useState } from "react";

import { Card } from "../Card";

import { api } from "../../services/api";
import { getRandomNumbers } from "../../utils/getRandomNumbers";
import { shuffle } from "../../utils/shuffleArray";
import { ScoreContext } from "../../contexts/score";

import pokeball from '../../assets/pokeball.png';

import './styles.css';

type Pokemon = {
  name: string;
  sprite: string;
  clicked: boolean;
};

export function Cardboard() {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);
  const [cards, setCards] = useState(12);

  const { current, setCurrent } = useContext(ScoreContext);

  useEffect(() => {
    async function handleRequest() {
      const randomArr = getRandomNumbers(898, cards);

      const pkmArr = randomArr.map(async (pkmId) => {
        const result = await api.get(`${pkmId}`);

        const { name, sprites: { front_default } } = result.data;
  
        const pokemon = {
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
  }, [cards]);

  function handleShuffle() {
    const toBeShuffled = [...pokemons];
    const shuffled = shuffle(toBeShuffled);

    setPokemons(shuffled);
  }

  function handleClick(index: number) {
    if (!pokemons[index].clicked) {
      setCurrent(current + 1);

      const newArr = [...pokemons];
      newArr[index].clicked = true;

      handleShuffle();

      if (pokemons.every(pokemon => pokemon.clicked)) {
        setPokemons([]);
        setCards(cards + 2);
      }
    } else {
      window.location.reload();
    }
  }

  return (
    <div id='cardboard'>
      <h2>Choose your pokémons</h2>
      <div id='cards'>
        {
          pokemons.length > 0 ?
            pokemons.map(({ name, sprite }, index) => 
              <Card
                key={index}
                index={index}
                name={name}
                sprite={sprite}
                handler={handleClick}
              />) 
            :
            <div id='loading'>
              <img src={pokeball} alt='pokeball icon' />
              Loading...
            </div>
        }
      </div>
    </div>
  );
}