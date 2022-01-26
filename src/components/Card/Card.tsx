import { Card as MuiCard, CardActionArea, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Card.styles";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  index,
  name,
  sprite,
  handler
}: CardProps) => {
  const styles = useStyles();

  const onCardClick = () => {
    handler(index);
  };

  return (
    <MuiCard onClick={onCardClick} className={styles.cardWrapper}>
      <CardActionArea className={styles.imageWrapper}>
        <img
          className={styles.pokemonImage}
          src={sprite}
          alt={name}
        />
        <CardContent>
          <Typography className={styles.pokemonName}>
            {name
              .replace(
                name[0],
                name[0].toUpperCase()
              )
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}