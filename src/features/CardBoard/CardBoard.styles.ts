import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  cardBoardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 31px",
    minHeight: "76vh",
  },
  cardsWrapper: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    width: "80vw",
  },
});