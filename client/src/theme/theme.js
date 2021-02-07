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
  }
});
