import React from 'react'
import clsx from 'clsx';
import { Grid, Paper, InputBase } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';

import WorkIcon from '@material-ui/icons/Work';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SelectAllIcon from '@material-ui/icons/SelectAll';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      marginTop: "20px",
      padding: "10px"
    },
    comSymbole: {
      display: "flex",
      justifyContent: "center"
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

function Card(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper className={classes.paper}>
                      <Grid container spacing={3}>
                        <Grid item sm={8} title={"Total Job seekers"}>
                            <h3 className="truncate">Job seekers </h3>
                        </Grid> 
                        <Grid item sm={4} className={classes.comSymbole}>
                            <WorkIcon />
                        </Grid>
                      </Grid>
                      <h3>2</h3>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper className={classes.paper}>
                      <Grid container spacing={3}>
                      <Grid item sm={8} title={"Total Interview Scheduled"}>
                          <h3 className="truncate">Interviews Scheduled </h3>
                      </Grid> 
                      <Grid item sm={4} className={classes.comSymbole}>
                          <ScheduleIcon />
                      </Grid>
                      </Grid>
                      <h3>1</h3>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper className={classes.paper}>
                      <Grid container spacing={3}>
                      <Grid item sm={8}>
                          <h3 className="truncate"> Selected </h3>
                      </Grid> 
                      <Grid item sm={4} className={classes.comSymbole}>
                          <SelectAllIcon />
                      </Grid>
                      </Grid>
                      <h3>1</h3>
                  </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Card
