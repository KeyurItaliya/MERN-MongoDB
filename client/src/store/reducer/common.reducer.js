import * as Actions from '../actions/common';

const initialState = {
	messageOptions: {
		showMessage:false,
		// autoHideDuration: 4000,
		message: 'Hi',
        varient: 'error',
        // autohide:true,
    },
    linearProgressLoader: {
        progressDisplay: false
    },
};

const message = (state = initialState, action) => {
	switch (action.type) {

		case Actions.SHOW_MESSAGE: {
			// console.log("action.options ", action.options )
			return {
				...state,
				messageOptions: {
					showMessage: true,
					message:action.options.message,
					varient:action.options.varient,
				}
			};
        }
        
		case Actions.HIDE_MESSAGE: {
			return {
				...state,
				messageOptions: {
					...initialState.messageOptions
				}
			};
        }

        case 'PROGRESS_LOADER':
            {
                return {
                    ...state,
                    linearProgressLoader: {
                        progressDisplay: action.payload.status
                    }
                }
			}
		case Actions.SHOW_TOP_LOADER:
			{
				return {
                    ...state,
                    linearProgressLoader: {
                        progressDisplay: true
                    }
                }
			}
		case Actions.HIDE_TOP_LOADER:
			{
				return {
					...state,
					linearProgressLoader: {
						progressDisplay: false
					}
				}
			}
		default: {
			return state;
		}
	}
};

export default message;
