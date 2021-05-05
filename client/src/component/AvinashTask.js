import { makeStyles, Input, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = new makeStyles({
  a : {
    outlineColor: "blue",
    width: 60,
    marginRight: 10
  }
})

const initial = {
  first: '',
  second: '',
  third: '',
  fourth: ''
}

function AvinashTask() {
  const classes = useStyle()
  const [state, setState] = useState(initial)
  console.log(state)
  const onChangeHandle = (e) => {
    setState({ ...state, [e.target.name] : e.target.value })
  }
  return (
    <div className="flex w-100">
      <TextField 
        type="text" 
        name="first"
        className={classes.a} 
        variant="outlined"
        value={state.first} 
        onChange={(e) => onChangeHandle(e)}
      />      
      <TextField 
        type="text" 
        name="second"
        className={classes.a} 
        variant="outlined"
        value={state.second} 
        onChange={(e) => onChangeHandle(e)}
      /> 
      <TextField 
        type="text" 
        name="third"
        className={classes.a} 
        variant="outlined"
        value={state.third} 
        onChange={(e) => onChangeHandle(e)}
      />    
      <TextField 
        type="text" 
        name="fourth"
        className={classes.a} 
        variant="outlined"
        value={state.fourth} 
        onChange={(e) => onChangeHandle(e)}
      /> 
    </div>
  )
}

export default AvinashTask
