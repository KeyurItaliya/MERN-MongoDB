import { combineReducers } from 'redux';
import user from './dataReducer';
import auth from './auth.reducer';
export const reducerStore = combineReducers({
    user,
    auth
});