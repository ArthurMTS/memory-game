import React from "react";
import { ScoreContext } from "../../contexts/score";
import pokeball from "../../assets/images/pokeball.png";
import { useStyles } from "./Header.styles";
import { Box } from "@material-ui/core";

export const Header: React.FC = () => {
  const styles = useStyles();
  const { current, best } = React.useContext(ScoreContext);

  return (
    <Box className={styles.headerWrapper} component="header">
      <Box className={styles.titleWrapper}>
        <img
          className={styles.logo}
          src={pokeball}
          alt="pokeball icon"
        />
        <h1 className={styles.title}><span>Poké</span>Mem</h1>
      </Box>
      <Box className={styles.scoreBoard}>
        <p id="current">Current: {current}</p>
        <p id="best">Best: {best}</p>
      </Box>
    </Box>
  );
};