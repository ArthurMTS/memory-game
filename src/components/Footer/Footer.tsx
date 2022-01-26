import React from "react";
import { GitHub } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { useStyles } from "./Footer.styles";

export const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <Box component="footer" className={styles.footerWrapper}>
      <p className={styles.description}>Made with ❤️ by ArthurMTS</p>
      <a
        className={styles.link}
        href="https://github.com/ArthurMTS/memory-game"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub className={styles.githubIcon} />
      </a>
    </Box>
  );
};