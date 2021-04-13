import { USER_LOGIN_PROCESS, SET_OPEN_DELETE_CONFIRM_DIALOG, IS_USER_REGISTER } from '../types';
import axios from 'axios';
import * as Action from './index';

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

export const userRegister = (datas) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const config = {
            headers: { 'content-type':  'application/json' }
        }
        axios({
            method: 'post',
            url: '/register',
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

export const userDelete = (datas) => (dispatch) => {
  console.log("delet id response ::", datas)
  return new Promise((resolve, reject) => {
      const url = `http://localhost:8000/deleteUser/${datas}`;
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
              console.log("Delete success ::", deleteResponse)
              dispatch(Action.getUser())
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