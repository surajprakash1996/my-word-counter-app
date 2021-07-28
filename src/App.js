import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainComponent from "./Main.component";
import HeaderLayout from "./Header.layout";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderLayout />
      <MainComponent />
    </React.Fragment>
  );
}
