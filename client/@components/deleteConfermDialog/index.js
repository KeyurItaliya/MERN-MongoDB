import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function DeleteConfirmDialog(props) {
    return (
        <div>
            <Dialog 
                {...props}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <p className=" m-1 " >
                        {props.cofirmmessge ?  props.cofirmmessge  : null }
                    </p>
                
            </Dialog>
        </div>
    )
}

export default DeleteConfirmDialog
