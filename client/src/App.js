import React,{ Suspense , lazy } from 'react';
import DeshAppBar from './component/DeshAppBar.js';
import Header from './component/Header.js';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import * as history from 'history';
import { AuthRoutes, UnAuthRoutes } from './config/routerConfig'
import ProtectedRout from './config/ProtectedRout.config'
import UnProtectedRoute from './config/UnProtectedRouter'
import MainScreenLoader from './component/MainScreenLoader'
import {useTheme, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import './styles/tailwind.css'
import * as Actions from './store/actions'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1)
    },
    toolbar: theme.mixins.toolbar,
  })
)

function AuthWrraper(props){
  const dispatch = useDispatch();
  const { isAuthenticationUpdated } =  useSelector(({ auth }) => auth );

  React.useEffect(()=>{
    dispatch(Actions.handleAuthentication());
  },[])

  React.useEffect(()=>{
    if( isAuthenticationUpdated === true ){
      dispatch(Actions.handleAuthentication());
    }
  },[isAuthenticationUpdated])
  return(
    <React.Fragment>
       <App /> 
    </React.Fragment>
  )
}

function App() {
  const classes = useStyles();
  return (
        <React.Fragment>
          <Router history={history.createBrowserHistory()}>
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                    <Suspense fallback={<MainScreenLoader />}>
                      <Switch>

                        {UnAuthRoutes.map((RouteObj, index) => (
                          <UnProtectedRoute
                            key={index}
                            path={RouteObj.path}
                            exact
                            // exact={(exact !== undefined && exact === true)? true : false}
                            // component={lazy(()=> import(RouteObj.component))}
                            component={RouteObj.component}
                          />
                        ))}

                        <ProtectedRout component={ComponentWithNavbar} />

                      </Switch>
                    </Suspense>
                </main>
          </Router>
        </React.Fragment>
  );
}

const ComponentWithNavbar = () => {
  const classes = useStyles();
  return (
  <React.Fragment>
    <Suspense fallback={<MainScreenLoader />}>
      <div className={classes.root}>
        <DeshAppBar />
        <main className={classes.content}>
          <div className={classes.toolbar} >
            <Switch>
              {AuthRoutes.map((RouteObj,index)=>(
                <ProtectedRout
                    key={index}
                    path={RouteObj.path}
                    exact
                    // exact={(exact !== undefined && exact === true)? true : false}
                    // component={lazy(()=> import(RouteObj.component))}
                    component={RouteObj.component}
                />
              ))}
            </Switch>
          </div>
        </main>
      </div>
    </Suspense>
  </React.Fragment>
  )
}

export default AuthWrraper;
