import { SET_USER_DATA, 
    IS_EMPLOYEE_AUTHENTICATED,
    IS_USER_AUTHENTICATION_UPDATED
} from '../types'

const initialState = {
    isUserAuthenticated:false,
    isAuthenticationUpdated:false
}

const employee = function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
        {
						// localStorage.setItem('token', JSON.stringify(action.payload))
						return {
							...state,
						};
					}
		case IS_EMPLOYEE_AUTHENTICATED:
        {
			return {
				isUserAuthenticated:action.payload
			};
        }
		case IS_USER_AUTHENTICATION_UPDATED:
		{
			return {
				...state,
				isAuthenticationUpdated:action.payload
			};
		}
		default: return state;
    }
}

export default employee;