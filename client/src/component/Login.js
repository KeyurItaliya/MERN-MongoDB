import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import * as Actions from '../store/actions'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Login(props) {

    const classes = useStyles();
    const dispatch = useDispatch()
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('* user name required'),
        password: Yup.string().required('* password required'),
    });

    return (
        <div className={classes.root} >
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    dispatch(Actions.loginUsers(values))
                    // axios.post('login', {...values})
                    // .then(res=>{
                    //     let { status, token } = res.data;
                    //     if( status ){
                    //         localStorage.setItem('token', token)
                    //     }
                    //     else{
                    //         console.log("login failed");
                    //     }
                    // })
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, validateForm, getFieldProps }) => (
                    <React.Fragment>
                    <div className={"w-50 mx-auto"}>
                        <h3 className={"w-full mx-auto text-center rounded-full bg-yellow-500 p-1"}>Login Form</h3>
                        <Form onSubmit={handleSubmit} className={"mx-auto text-center p-3 rounded-2xl bg-green-400"}>
                            <TextField 
                                name='username' 
                                {...getFieldProps('username')} 
                                label="Email" 
                                type="text"
                                variant="outlined"
                                error={touched.username && errors.username}
                            />
                            <br/>
                            <span className="text-red-600 "><ErrorMessage className="error_msg" name='username' /></span><br/>
                            <TextField 
                                name='password' 
                                {...getFieldProps('password')} 
                                label="Password" 
                                type='password'
                                variant="outlined"
                                error={touched.password && errors.password}
                                className={"mt-2"}
                            /> <br/>
                            <span className=" text-red-600 "><ErrorMessage className="error_msg" name='password' /></span><br/>
                            <Button variant="contained" className={"mt-2 ml-5"} color="primary" type="submit">Login</Button>
                        </Form>
                    </div>
                    </React.Fragment>
                )}
            </Formik>
        </div>
    )
}

export default Login;