import { ADD_PRODUCT } from '../types';
import axios from 'axios';

const fetchCitySuccess = (res) =>{
  return{
    type: ADD_PRODUCT,
    payload: res
  }
}

axios.defaults.headers.post['Content-Type'] = 'aplication/json';
// axios.defaults.headers.common['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiX2lkIjoiNjA2NmQ5MWJhNGEyNjcxYWVjMWFiYWVlIiwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiNmQzOGU2M2IyM2MyNjFiZTc5NTBhMGVkZWIzYzc3NGUiLCJhZGRyZXNzIjoicmVxLmJvZHkuYWRkcmVzcyIsIk1vYmlsZSI6MTIzNCwiX192IjowfSwiaWF0IjoxNjE3MzUyOTg4LCJleHAiOjE2MTc5NTc3ODh9.ATfhjyF9Lf-aGTF7bMoFoHcBXseYrLpKc3KUIOuoOs8';
export const getUser = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        // const CORS_PROXY = "http://localhost:3001/";
        // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        const request = axios({
          method: 'get',
          url: '/user/users',
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



