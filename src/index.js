import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
