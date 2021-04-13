import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    bg: {
        backgroundColor: '#7874f7',
        color: 'white',
        width: '100%',
        maxWidth: 300,
        height: 666,
        maxHight: '100%'
    }
  }));

function Listitem(){
    const classes = useStyles();
    return(
        <List className={classes.bg} subheader={<ListSubheader>List</ListSubheader>} >
            <ListItem>
                <ListItemIcon>
                <HomeIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Home" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <LocalAtmIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Money Manager" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Notice" />
            </ListItem>
        </List>
    );
}

export default Listitem;


