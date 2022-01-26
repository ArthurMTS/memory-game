import { Box } from "@material-ui/core";
import React from "react";
import pokeball from "../../assets/images/pokeball.png";
import { useStyles } from "./Loader.styles";

export const Loader: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.loaderWrapper}>
      <img
        className={styles.loaderIcon}
        src={pokeball}
        alt='pokeball icon'
      />
      Loading...
    </Box>
  );
};