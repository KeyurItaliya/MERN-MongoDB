import React from "react";
import { Route, Redirect } from "react-router-dom";
// import jwtDecode from 'jwt-decode';
import { useSelector, connect } from 'react-redux';


const UnProtectedRoute = ({isUserAuthenticated, component: Component, ...rest}) => {
  // const { isAuthenticationUpdated } =  useSelector(({ auth }) => auth );
  return (
    <Route
      {...rest}
      render={props => {
        if ( !isUserAuthenticated ) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: props.location.state.from.pathname,
                state: {
                  from: props.location.state.from.pathname
                }
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return{
      isUserAuthenticated : state.auth.isUserAuthenticated
  }
} 

export default connect(mapStateToProps)(UnProtectedRoute);