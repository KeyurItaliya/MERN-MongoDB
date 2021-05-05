import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, BrowserRouter as Router } from "react-router-dom";

import {useTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import CloseIcon from '@material-ui/icons/Close';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ReportIcon from '@material-ui/icons/Report';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';

import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MainDesh from './Register';
import configAppConst from './appConfigurations'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import * as Actions from '../store/actions'

// appbar
// [theme.breakpoints.up('sm')]: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
// },

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')] : {
      width: drawerWidth,
      flexShrink: 0,
      }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#212121',
        [theme.breakpoints.down('sm')]: {
          backgroundColor: '#ffff00',
          color: 'black',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    loginButton : {
      marginLeft: 'auto'
    },
    purple: {
      marginLeft: 'auto',
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    closeMenuButton: {
        marginRight: 0,
        marginLeft: 'auto',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    navButton: {
      textDecoration: 'none',
      color: 'white',
      '&:hover': {
        color: 'white',
      }
    }
  }),
);

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Job Seeker',
    path: '/jobseeker',
    icon: <WorkIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/registeruser',
    icon: <PeopleAltIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Pagination',
    path: '/pagination',
    icon: <InboxIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <ReportIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Mail',
    path: '/mail',
    icon: <MailIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <ReportIcon />,
    cName: 'nav-text'
  },
];


function DeshAppBar(props) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const theme = useTheme();
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        // alert("hello")
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [userLogin, setUserLogin] = React.useState({username: '', password: ''});
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { isUserAuthenticated } =  useSelector(({ auth }) => auth );

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
          username: userLogin.username,
          password: userLogin.password
        }
        dispatch(Actions.loginUsers(data))
        setOpen(false)
    }   

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setUserLogin({...userLogin, [name]: value })
    }

    const [openColleps, setOpenColleps] = React.useState(false);

    const handleClick = () => {
      setOpenColleps(!openColleps);
    };

    const logOutHendle = () =>{
      dispatch(Actions.logoutAuthentication())
    }

    const maxWidth = "sm"

    const drawer = (
        <div>
            <h5 className="mt-3" style={{textAlign: "center"}}>Deshboard</h5>
            <Divider />
              {/* <Router> */}
                  <List >
                  {SidebarData.map((item, index) => {
                    return (
                      <Link to={item.path} key={index} style={{textDecoration: "none", color: "black"}}>
                        <ListItem key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} selected={true} />
                        </ListItem>
                      </Link>
                    );
                  })}
                  </List>
              {/* </Router> */}
            <List >
                <ListItem button >
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Home"  />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="Table" 
                    />
                    {openColleps ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                
                <Collapse in={openColleps} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItem>
                  </List>
                </Collapse>
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
          <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className="navbar navbar-dark bg-dark" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {configAppConst.LogoTitle}
                </Typography>
               
                {
                  isUserAuthenticated ? (
                    <React.Fragment>
                      <Avatar className={classes.purple} >H</Avatar>
                      <Button  onClick={logOutHendle} color="inherit">
                        LogOut
                      </Button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                    <Button className={classes.loginButton} onClick={handleClickOpen} color="inherit">
                      Login
                    </Button>
                    <Button onClick={logOutHendle} color="inherit">
                      <Link className={classes.navButton} to="register">
                      Register
                      </Link>
                    </Button>
                    </React.Fragment>
                  )
                }
                
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer} aria-label="mailbox folders">
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Hidden smUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                    <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                        <CloseIcon/>
                    </IconButton>
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
                >
                <div className={classes.toolbar} />
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                maxWidth={maxWidth}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <form onSubmit={e => submitHandler(e)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        aria-labelledby="max-width-dialog-title"
                        margin="dense"
                        id="username"
                        label="Email Address"
                        type="text"
                        name="username"
                        value={userLogin.username}
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        aria-labelledby="max-width-dialog-title"
                        margin="dense"
                        id="password"
                        type="password"
                        lable="password"
                        name="password"
                        onChange={e => handleInputChange(e)}
                        value={userLogin.password}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" value="submit" color="primary">
                        Login
                    </Button>
                </DialogActions>
                </form>
            </Dialog>
          </React.Fragment>
    )
}

export default DeshAppBar
