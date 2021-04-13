import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

function DeleteConfirmDialog(props) {
    return (
        <div>
            <Dialog 
                {...props}
                aria-labelledby="form-dialog-title"
                fullWidth
            >   
                <div className="d-flex">
                    <DialogTitle id=" form-dialog-title mx-auto">Are you sure?</DialogTitle>
                    <div className="ml-auto p-3"><span onClick={props.onHide}><CloseIcon /></span></div>
                </div>
                <p className="ml-4" >
                    {props.cofirmmessge ?  props.cofirmmessge  : null }
                </p>
                <div className=" mt-2 ml-auto flex flex-row justify-end " >
                        <Button title={'Cancel'} className=" m-1 bg-dark text-light" variant="light" onClick={props.onHide}>{'cancel'}</Button>
                        <Button  className=" m-1 bg-dark text-light" variant="danger" 
                            title={'Are you shore? '}
                            onClick={()=>{
                                if(props.onClickDelete){
                                    props.onClickDelete();
                                }
                            }}
                        >{'Delete'}</Button>
                    </div>
            </Dialog>
        </div>
    )
}

export default DeleteConfirmDialog
