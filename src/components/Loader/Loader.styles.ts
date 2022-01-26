import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  loaderWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    fontSize: 18,
  },
  loaderIcon: {
    animation: "rotate .5s infinite alternate",
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(20deg)",
    },
    "100%": {
      transform: "rotate(-20deg)",
    },
  },
});