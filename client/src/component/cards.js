import React from 'react'
import clsx from 'clsx';
import { Grid, Paper, InputBase } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';

import WorkIcon from '@material-ui/icons/Work';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SelectAllIcon from '@material-ui/icons/SelectAll';

const useStyle = makeStyles((theme) => ({
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

function cards({ classess }) {
    const classes = useStyle
    return (
        <React.Fragment>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper className={classes.paper}>
                      <Grid container spacing={3}>
                      <Grid item sm={6} title={"Total Job seekers"}>
                          <h3 className="truncate">Job seekers </h3>
                      </Grid> 
                      <Grid item sm={6} className={classes.comSymbole}>
                          <WorkIcon />
                      </Grid>
                      </Grid>
                      <h1>1515 USD</h1>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper className={classes.paper}>
                      <Grid container spacing={3}>
                      <Grid item sm={6} title={"Total Interview Scheduled"}>
                          <h3 className="truncate">Interviews Scheduled </h3>
                      </Grid> 
                      <Grid item sm={6} className={classes.comSymbole}>
                          <ScheduleIcon />
                      </Grid>
                      </Grid>
                      <h1>1515 USD</h1>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper className={classes.paper}>
                      <Grid container spacing={3}>
                      <Grid item sm={6}>
                          <h3 className="truncate"> Selected </h3>
                      </Grid> 
                      <Grid item sm={6} className={classes.comSymbole}>
                          <SelectAllIcon />
                      </Grid>
                      </Grid>
                      <h1>1515 USD</h1>
                  </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default cards
