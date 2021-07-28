import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  typo: {
    color: "white",
    fontWeight: "bold"
  }
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.typo} align="center" variant="h4">
            Word Counter
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
