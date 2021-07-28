import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: "white"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const TableComponent = (props) => {
  const classes = useStyles();
  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Spaces</StyledTableCell>
              <StyledTableCell align="center">Words</StyledTableCell>
              <StyledTableCell align="center">Paragraphs</StyledTableCell>
              <StyledTableCell align="center">Characters</StyledTableCell>
              <StyledTableCell align="center">Sentence</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">
                {props.counts.countSpace}
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.counts.wordCounts}
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.counts.countParagraph}
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.counts.countChar}
              </StyledTableCell>
              <StyledTableCell align="center">
                {props.counts.sentenseCount}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
