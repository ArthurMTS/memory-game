import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#424242",
    width: 150,
    transition: "all 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  pokemonImage: {
    borderBottom: "2px solid #515151",
  },
  pokemonName: {
    fontSize: 18,
    padding: "5px 0",
    color: "#fff",
    textAlign: "center",
  },
});