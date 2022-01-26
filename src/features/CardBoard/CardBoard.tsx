import React from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { getRandomNumbers } from "../../utils/getRandomNumbers";
import { shuffle } from "../../utils/shuffleArray";
import { ScoreContext } from "../../contexts/score";
import { Pokemon } from "./types";
import { Loader } from "../../components/Loader";
import { Box } from "@material-ui/core";
import { useStyles } from "./CardBoard.styles";

export const CardBoard: React.FC = () => {
  const styles = useStyles();
  const [pokemons, setPokemons] = React.useState([] as Pokemon[]);
  const [cards, setCards] = React.useState(12);
  const { current, setCurrent } = React.useContext(ScoreContext);

  React.useEffect(() => {
    const handleRequest = async () => {
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

  const handleShuffle = () => {
    const toBeShuffled = [...pokemons];
    const shuffled = shuffle(toBeShuffled);

    setPokemons(shuffled);
  };

  const handleClick = (index: number) => {
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
  };

  return (
    <Box component="main" className={styles.cardBoardWrapper}>
      <h2>Choose your pokémons</h2>
      <Box className={styles.cardsWrapper}>
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
            <Loader />
        }
      </Box>
    </Box>
  );
}