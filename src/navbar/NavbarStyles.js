import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#363838",
  },
  toolbar: {
    padding: "3px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appImage: {
    width: '10em',
    cursor: 'pointer',
  },
}));
