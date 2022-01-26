import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  footerWrapper: {
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 0",
    gap: 10,
  },
  description: {
    color: "#fff",
    fontSize: 18,
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .1s",
    "&:hover": {
      filter: "brightness(.8)",
    },
  },
  githubIcon: {
    color: "#fff",
  },
});