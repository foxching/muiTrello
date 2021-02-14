import { createMuiTheme } from "@material-ui/core/styles";
import { green, indigo } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[200],
      contrastText: "#fff"
    },
    secondary: {
      main: green[400],
      contrastText: "#fff"
    },
    action: {
      disabledBackground: "#EBECF0"
    }
  },
  spreadThis: {
    paperStyle: {
      padding: 25,
      height: "70vh",
      width: 380,
      margin: "30px auto"
    },
    btnstyle: { marginTop: 20, position: "relative" },
    progress: {
      position: "absolute"
    },
    modalSideMenuHead: {
      color: "grey",
      fontWeight: "900",
      fontSize: "12px",
      marginBottom: "10px"
    },
    modalMenubtn: {
      marginBottom: "10px",
      fontSize: "1em",
      textTransform: "none",
      boxShadow: "none"
    }
  }
});
