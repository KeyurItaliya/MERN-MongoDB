import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux"

// const isAuthTokenValid = () => {

//     let access_token =  localStorage.getItem('token')

//     if (!access_token) {
//         return false;
//     }
//     const decoded = jwtDecode(access_token);
//     const currentTime = Date.now() / 1000;
//     if (decoded.exp < currentTime) {
//         return false;
//     }
//     else {
//         return true;
//     }
// };


const ProtectedRout = ({isUserAuthenticated, component: Component, ...rest}) => {
    return (
        <Route
            // to={rest.path} component={Component}
            {...rest}
            render={props => {
                if( isUserAuthenticated ){
                // console.log("componebnt :: ",Component)
                return <Component {...props} />;
                }else{
                    return (
                        <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                            from: props.location
                            }
                        }}
                        />
                    )
                }
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return{
        isUserAuthenticated : state.auth.isUserAuthenticated
    }
} 

export default connect(mapStateToProps)(ProtectedRout)
