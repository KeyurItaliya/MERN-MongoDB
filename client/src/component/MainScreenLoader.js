import React from 'react';
import { Spinner } from 'react-bootstrap';


function MainScreenLoader(props) {
    return (
        <div className=" h-screen w-screen flex justify-center items-center " >
            <Spinner className=" h-20 w-20 m-auto " animation="border" />
        </div>
    )
}

export default MainScreenLoader
