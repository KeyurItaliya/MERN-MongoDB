import React, {useEffect, useState} from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import * as Action from '../store/actions';
import { connect, useDispatch } from 'react-redux';
import { formData } from '../apis/FormFack'
import objectData from '../apis/FormFack'
// table 
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

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

function RecipeReviewCard(props) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [numOfRow, setNumOfRow] = React.useState()
  useEffect(() => {
    dispatch(Action.getUser())
  }, [])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ListOfName = (datas) => {
    let names = datas.names
    const listItem = names.map((name)=> 
      <li key={name}>{name}</li>
    )
    return (
      <ol>{listItem}</ol>
    )
  }
   
  const names = ['keyru', 'italiya', 'hello']

  let resData = props.employee

 const promptTasken = () =>{
   let numberOfRow = prompt("Enter Number :-")
   if(numberOfRow > 0){
      setNumOfRow(numberOfRow)
   }
 }
const PrintPattern = (numOfRow) => {
  var is = []
  for(let i = 1; i <= numOfRow.numOfRow; i++){
    for(let j = 1; j<=i; j++){
      is.push(i)
    }
  }
  console.log("isss", is)
  return (
    is.map((pss, index)=>{
      return (
      <React.Fragment key={index}>
      {(pss < index)
       ? (<span>{pss}<br /></span> ) : ''
      }
      </React.Fragment>
      )
    })
  )
}
 

  return (
    <React.Fragment>
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
          <TableBody style={{ maxHeight:'300px',overflow:'scroll' }}>
              {resData && resData.map((resData, key) => (
                  <TableRow  key={key}>
                  <TableCell align="right">{resData.username}</TableCell>
                  <TableCell align="right">{resData.password}</TableCell>
                  <TableCell align="right">{resData.Mobile}</TableCell>
                  <TableCell align="right">
                    <button
                      style={{background: 'none', border: 'none'}}
                      title='Edit Employee'
                      className="focus:outline-none" type="button"
                    ><CreateIcon /></button>
                    <button
                      style={{background: 'none', border: 'none'}}
                      onClick={() => {alert("hello")}}
                      title='Delete Employee'
                      className="focus:outline-none" type="button"
                    ><DeleteIcon /></button>
                  </TableCell>
                  </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div className="container">
        <table className="shadow">
          <thead>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Mobile</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index)=> {
              return(
                <tr key={index}>
                  <td >{data.username}</td>
                  <td >{data.address}</td>
                  <td >{data.Mobile}</td>
                  <td></td>
                </tr>
              )
            })}
        </tbody>
        </table>
      </div>
          
    <ListOfName names={names}/> */}

    <div>
      <button className={'btn btn-success'} onClick={promptTasken}>Click here</button>
    </div>
    {numOfRow ? 
      (<PrintPattern numOfRow={numOfRow} />)
    :
    null
    }
    </React.Fragment>
    );
}

const mapStateToProps = ({user}) => ({
  employee: user.employee
})

export default connect(mapStateToProps)(RecipeReviewCard)