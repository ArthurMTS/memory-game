import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  headerWrapper: {
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 100px",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(20deg)",
    },
    "100%": {
      transform: "rotate(-20deg)",
    },
  },
  logo: {
    "&:hover": {
      animation: "rotate .5s infinite alternate",
    },
  },
  title: {
    color: "#fff",
    "& span": {
      color: "#ff3d00",
    },
  },
  scoreBoard: {
    fontSize: 18,
    "& #current": {
      color: "#ff3d00",
    },
    "& #best": {
      color: "#fff",
    },
  },
});