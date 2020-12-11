import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        "& .button": {
          opacity: 0
        },
        "&:hover .button": {
          opacity: 2
        }
      }
    }
  }
});
