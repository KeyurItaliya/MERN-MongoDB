import { ADD_PRODUCT, USER_LOGIN_PROCESS, SET_OPEN_DELETE_CONFIRM_DIALOG, IS_USER_REGISTER, IS_USER_UPDATED } from '../types';
import axios from 'axios';
import * as Action from './index';

const fetchCitySuccess = (res) =>{
  return{
    type: ADD_PRODUCT,
    payload: res
  }
}

axios.defaults.headers.post['Content-Type'] = 'aplication/json';

const registeCitySuccess = (res) =>{
  return{
    type: USER_LOGIN_PROCESS,
    payload: res
  }
}

export const isUserRegisterSuccess = (res) =>{
  return{
    type: IS_USER_REGISTER,
    payload: res
  }
}
export const isUserUpdated = (res) =>{
  return{
    type: IS_USER_UPDATED,
    payload: res
  }
}

export const userRegister = (datas) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const config = {
            headers: { 'content-type':  'application/json' }
        }
        axios({
            method: 'post',
            url: '/api/user/register',
            headers: config, 
            data: datas
          }).then((res) => {
            const categoyuData = res.data;
            if (categoyuData) {
                dispatch(registeCitySuccess(categoyuData));
                // dispatch(Action.showMessage( message.message ,'success'));
                dispatch(isUserRegisterSuccess(true))
                resolve({ message: 'Success' });
            } else {
                reject({ message: 'Something fetch Category wrong!!' });
            }
           
          })
          .catch((err) => {
            reject({ message: 'Something went wrong!!' });
          });
        });
};


export function setOpenDeleteConfirmDialog(data) {
  return {
      type: SET_OPEN_DELETE_CONFIRM_DIALOG,
      payload: data
  }
}

export const getUser = () => (dispatch) => {
  return new Promise((resolve, reject) => {
      // const CORS_PROXY = "http://localhost:3001/";
      // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const request = axios({
        method: 'get',
        url: '/api/user/users',
        // headers: {
        //   authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiX2lkIjoiNjA2NmQ5MWJhNGEyNjcxYWVjMWFiYWVlIiwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiNmQzOGU2M2IyM2MyNjFiZTc5NTBhMGVkZWIzYzc3NGUiLCJhZGRyZXNzIjoicmVxLmJvZHkuYWRkcmVzcyIsIk1vYmlsZSI6MTIzNCwiX192IjowfSwiaWF0IjoxNjE3MzUyOTg4LCJleHAiOjE2MTc5NTc3ODh9.ATfhjyF9Lf-aGTF7bMoFoHcBXseYrLpKc3KUIOuoOs8'
        // }
      })
      request.then((res) => {
          // console.log("all res Data",res)
          const categoyuData = res.data;
          if (categoyuData) {
              dispatch(fetchCitySuccess(categoyuData));
              resolve({ message: 'Success' });
          } else {
              reject({ message: 'Something fetch Category wrong!!' });
          }
         
        })
        .catch((err) => {
          reject({status: false, message: 'Something went wrong!!' });
        });
  });
};


export const userDelete = (datas) => (dispatch) => {
  console.log("delet id response ::", datas)
  return new Promise((resolve, reject) => {
      const url = `http://localhost:8000/api/user/deleteUser/${datas}`;
      const config = {
          headers: { 'content-type':  'application/json' }
      }
      axios({
          method: 'delete',
          url: url,
          headers: config, 
          // data: datas
        }).then((res) => {
          console.log("delet response ::", res)
          const deleteResponse = res.data;
          if (deleteResponse) {
              // dispatch(userDeleteSuccess(deleteResponse));
              dispatch(isUserUpdated(true))
              resolve({ message: 'Success' });
          } else {
              reject({ message: 'Something fetch Category wrong!!' });
          }
         
        })
        .catch((err) => {
          reject({ message: 'Something went wrong!!' });
        });
      });
};

    // methodCall = (passData) => {
    //     return new Promise((resolve, reject) => {
    //         const request = axios({
    //             method: 'post',
    //             url: 'URL',
    //             data: passData
    //         })
    //         request.then((response) => {
    //             const { status, message } = response.data;
    //             if (status) {
    //                 resolve(message);
    //             } else {
    //                 reject({ message });
    //             }
    //         }).catch((error) => {
    //             console.log('error ' + error);
    //             reject({ message: 'Something went wrong!!' });
    //         })
    //     });
    // };