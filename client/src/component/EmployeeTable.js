import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ resData }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Mobile No</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {resData && resData.map((resData) => (
                <TableRow  key={resData._id}>
                <TableCell align="right">{resData.username}</TableCell>
                <TableCell align="right">{resData.password}</TableCell>
                <TableCell align="right">{resData.Mobile}</TableCell>
                <TableCell align="right"></TableCell>
                </TableRow>
             ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
