import { makeStyles } from "@material-ui/core";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "7%",
    borderRadius: 10,
    color: "white",

    height: "500px",
  },
  infoCard: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    // margin: 1,
  },
});
