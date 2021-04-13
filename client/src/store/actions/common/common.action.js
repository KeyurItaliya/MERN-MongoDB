// import { toast } from "react-toastify";
// import React from 'react';
// import { Check2, InfoCircleFill } from 'react-bootstrap-icons'

export const SHOW_LOADER = '[COMMON NOTIPHY APP] SHOW_LOADER';
export const SHOW_TOP_LOADER = '[COMMON NOTIPHY APP] SHOW_TOP_LOADER';
export const HIDE_TOP_LOADER = '[COMMON NOTIPHY APP] HIDE_TOP_LOADER';

export const HIDE_MESSAGE = '[COMMON NOTIPHY APP] CLOSE';
export const SHOW_MESSAGE = '[COMMON NOTIPHY APP] SHOW';



export function showLoader(loader_name, status) {
    return {
        type: SHOW_LOADER,
        payload: { 'name': loader_name, 'status': status }
    }
}

export function hideTopLoader() {
    return {
        type: HIDE_TOP_LOADER,
    }
}

export function showTopLoader() {
    return {
        type: SHOW_TOP_LOADER,
    }
}

export function hideMessage() {
	return {
		type: HIDE_MESSAGE
	};
}

export function showMessage(message,varient='error') {
	return {
		type: SHOW_MESSAGE,
		options:{ message: message , varient: varient}
	};
}

// export function showMessage(message,varient='error') {

//     if( varient ==='error' ){
//         toast.error( <div><InfoCircleFill color='white' size='30'  className=" inline-block mx-3 " />{message}</div> );
//     }else{
//         toast.success( <div><Check2 color='white' size='30' className=" inline-block  mx-3 " />{message}</div> );
//     }

// 	return {
// 		type: SHOW_MESSAGE,
// 		options:{ message: message , varient: varient}
// 	};
// }
