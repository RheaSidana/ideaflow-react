import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  box: {
    backgroundColor: "#282929",
    color: "white",
    marginTop: "2em",
    width: "100%",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  copyright: {
    textAlign: "center",
    mt: 2,
  },
  containerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "1em 2em 1em 2em",
  },
  dividerContainer: {
    width: "98%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
