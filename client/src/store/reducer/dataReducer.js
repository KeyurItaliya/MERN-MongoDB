import {
    ADD_PRODUCT,
    USER_LOGIN_PROCESS,
    SET_OPEN_DELETE_CONFIRM_DIALOG,
    IS_USER_REGISTER
  } from '../types';

const initialState = {
  employee: [],
  userLogin: {},
  istasksDeleteOpenDialog: false,
  isUserRegister: false
  };

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
          return {
            ...state,
            employee: action.payload
          };
        case USER_LOGIN_PROCESS:
          return {
            ...state,
            userLogin: action.payload
          };
        case IS_USER_REGISTER: 
          return {
            ...state,
            isUserRegister: action.payload
          }
        case SET_OPEN_DELETE_CONFIRM_DIALOG: 
          return {
            ...state,
            istasksDeleteOpenDialog: action.payload
          }
        default:
            return state;
    }
}

export default dataReducer