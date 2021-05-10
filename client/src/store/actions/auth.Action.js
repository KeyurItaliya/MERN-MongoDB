import { SET_USER_DATA,
    IS_EMPLOYEE_AUTHENTICATED,
    IS_USER_AUTHENTICATION_UPDATED
} from '../types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export function IsUserAuthenticatedAuth(data) {
	return {
        type: IS_EMPLOYEE_AUTHENTICATED,
        payload: data
	};
}

export function setUserData(data) {
	return {
        type: SET_USER_DATA,
        payload: data
	};
}

export function IsUserAuthenticationUpdated(event) {
	return {
        type: IS_USER_AUTHENTICATION_UPDATED,
        payload: event
	};
}

// const loginUser = (passData) => {
//     return new Promise((resolve, reject) => {
//         const request = axios({
//             method: 'post',
//             url: '/login',
//             data: passData
//         })
//         request.then((response) => {
//             const { status, message } = response.data;
//             if (status) {
//                 console.log('LOGIN_USER Success :', res)
//                 resolve( response.data );
//             } else {
//                 reject( {message} );
//             }
//         }).catch((error) => {
//             console.log('Login error ' + error);
//             reject({ message: 'Something went wrong!!' });
//         })
//     });
// };

// const ROOT_URL = 'http://localhost:8000';

// axios.defaults.baseURL = ROOT_URL;
// axios.defaults.headers.post['authenticat'] = 'aplication/json';

export const loginUsers = (passData) => (dispatch) =>{
    console.log('status data:', passData)
    return new Promise((resolve, reject) => {
        const request = axios({
            method: 'post',
            url: '/api/user/login',
            data: passData
        })
        request.then((response) => {
            if (response.data) {
                let { token } = response.data;
                console.log('LOGIN_USER Success :', token)
                localStorage.setItem('token', token)
                dispatch(IsUserAuthenticatedAuth(true));
                dispatch(IsUserAuthenticationUpdated(true))
                // dispatch(setUserData(response.data));
                resolve( response.data );
            } else {
                reject("error");
            }
        }).catch((error) => {
            console.log('Login error ' + error);
            reject({ message: 'Something went wrong!!' });
        })
    });

    
}

// console.log("passData :: ",passData)
//     return (dispatch) =>{
//         loginUser(passData).then((res) => {
//             console.log('LOGIN_USER Success :', res)
//             const { message, data } = res;
//             dispatch(IsUserAuthenticatedAuth(true));
//             dispatch(setUserData(data));
//         })
    // }

    const logOut = async () =>{
        return localStorage.removeItem('token');
    }

    export function logoutAuthentication(){
        return(dispatch)=>{
            logOut().then(()=>{
                dispatch(IsUserAuthenticatedAuth(false));
            })
            .catch(()=>{
    
            })
        }
    }

    // handleAuthentication

    export function handleAuthentication(){
        return(dispatch)=>{
            handleAuthentications().then(res=>{
                dispatch(IsUserAuthenticatedAuth(res));
                dispatch(IsUserAuthenticationUpdated(false));
            })
            .catch(error => {
                console.log('error :', error);
                dispatch(IsUserAuthenticatedAuth(false));
                dispatch(IsUserAuthenticationUpdated(false));
            })
        }
    }

    const getAccessToken = () => {
        const token = localStorage.getItem('token')
        if (token !== null) {
            return token
        }
        else {
            return null
        }
    };
    // const getUserData = () => {
    //     return localStorage.getItem('token')
    // };

    // const isAuthTokenValid = access_token => {
    //     if (!access_token) {
    //         return false;
    //     }
    //     const decoded = jwtDecode(access_token);
    //     const currentTime = Date.now() / 1000;
    //     if (decoded.exp < currentTime) {
    //         console.warn('access token expired');
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // };

    const handleAuthentications = async () => {
        // console.log("handleAuthentication called.")
        let access_token = getAccessToken();

        if (!access_token) {
            return false;
        }

        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            return false;
        }
        else {
            axios.defaults.headers.common['Authorization'] = access_token;
            return true;
        }

        // setInterceptors();
        // if (isAuthTokenValid(access_token)) {
        // else if (access_token) {
        //     let user_data = getUserData();
        //     axios.defaults.headers.common['authorization'] = user_data.access_token;
        //     return true;
        // }
        // else {
        //     return false;
        // }
    };