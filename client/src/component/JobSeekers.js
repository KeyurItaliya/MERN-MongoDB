import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Form , Spinner, OverlayTrigger ,Tooltip as BTooltip } from 'react-bootstrap';

import * as Action from '../store/actions';
import { connect, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    bg: {
        backgroundColor: '#7874f7',
        color: 'white',
        width: '100%',
        maxWidth: 300,
        height: 666,
        maxHight: '100%'
    }
  }));
  const initialFormValue = {
    username: '',
    password: '',
    address : '',
    Mobile : ''
  }
function JobSeekers(props){
    const {isUserUpdated, employee} = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const [infineHeight, setInfineHeight] = useState('200px');
    const [formData, setFormData] = useState(initialFormValue);
    const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = React.useState(false);
    const [deleteUserID, setDeleteUserID] = useState('')

    useEffect(() => {
      dispatch(Action.getUser())
    }, [])
    console.log("isUserUpdated -->", isUserUpdated)
    useEffect(() => {
      if(isUserUpdated){
        dispatch(Action.getUser())
        dispatch(Action.isUserUpdated(false))
      }
    }, [isUserUpdated])

    useEffect(() => {
      if(openDeleteConfirmDialog) {
        const con = window.confirm("Are you soure delete this user?")
        if(con){
          dispatch(Action.userDelete(deleteUserID))
          setOpenDeleteConfirmDialog(false)
        }else{
          setOpenDeleteConfirmDialog(false)
        }
      }else {
        setOpenDeleteConfirmDialog(false)
      }
    }, [openDeleteConfirmDialog])

    async function asyncsFunction() {
      setTimeout(() => {
        console.log("set time")
      }, 3000)
      const fa = async () => {
        setTimeout(() => {
          return "fa functions"
        }, 4000)
      }
      const a = await fa();
      console.log("a --->",a);
    }
    asyncsFunction();

    return(
        <TableContainer className="shadow mb-2" component={Paper}>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Mobile No</TableCell>
                <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody style={{ minWidth: 'max-content', maxWidth: '100%', height: infineHeight, overflow: 'auto' }}>
                {(employee.length > 0) && employee.map((resData, key) => (
                    <TableRow  key={key}>
                    <TableCell align="right">{resData.username}</TableCell>
                    <TableCell align="right">{resData.address}</TableCell>
                    <TableCell align="right">{resData.Mobile}</TableCell>
                    <TableCell align="right">
                        
                        <OverlayTrigger overlay={<BTooltip>{'Edit'}</BTooltip>}>
                        <Button variant="outlined" color="primary">
                            Set Interview
                        </Button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<BTooltip>{'Delete'}</BTooltip>}>
                        <button
                        style={{background: 'none', border: 'none'}}
                        onClick={() => {setOpenDeleteConfirmDialog(true); setDeleteUserID(resData._id)}}
                        title='Delete Employee'
                        className="focus:outline-none" type="button"
                        ><DeleteIcon /></button>
                        </OverlayTrigger>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = ({user}) => ({
    employee: user.employee,
    isUserUpdated: user.isUserUpdated
  })
export default connect(mapStateToProps)(JobSeekers);


