import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MoviesTable = ({ list }) => {
  function createData(movie, relation, released) {
    return { movie, relation, released };
  }

  const rows = list.map((row) => createData(...row));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Movie</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Released&nbsp;(Year)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.movie}
              </TableCell>
              <TableCell align="right">{row.relation}</TableCell>
              <TableCell align="right">{row.released}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoviesTable;
