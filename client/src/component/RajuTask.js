import React, { useState } from 'react'
import { Grid, Paper, InputBase } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import Card from './cards';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: "10em"
  },
  comSymbole: {
    marginTop: "20px"
  },
  table: {
    minWidth: 650,
  },
  tableContat : {
    marginTop: "20px"
  },
  inputInput: {
    marginTop: "15px",
    marginLeft: "12px"
  }
}));

function RajuTask() {
  const classes = useStyles()
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Cart classes = {classes}/>
      <TableContainer className={classes.tableContat} component={Paper}>
        <Grid container>
          <Grid item sm={0}>
            <h3 style={{marginLeft: "15px"}}>Stock Detail Table</h3>
          </Grid>
          <Grid container className={classes.inputInput}  spacing={0} sm={8}>
            <Grid item sm={0}>
              <SearchIcon />
            </Grid>
            <Grid item sm={0}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Table className={classes.table} aria-label="simple table">
          
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div>
  )
}

export default RajuTask
