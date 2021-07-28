import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";

let theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4"
    },
    secondary: {
      main: lightBlue[200]
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
        fontWeight: "bold"
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
