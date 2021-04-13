import React, { useEffect, useState }  from 'react';
import * as Action from '../store/actions';
import { connect, useDispatch } from 'react-redux';

// import EmployeeTable from './EmployeeTable';
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
import { Form , Button, Spinner, OverlayTrigger ,Tooltip as BTooltip } from 'react-bootstrap';
import { Formik, ErrorMessage } from "formik"
import * as Yup from 'yup';

import DeleteConfirmDialog from '../component/deleteConfermDialog'

const initialFormValue = {
                            username: '',
                            password: '',
                            address : '',
                            Mobile : ''
                          }

function MainDesh(props) {
  const {isUserRegister, employee} = props;
  const dispatch = useDispatch();
  const [buttonShow, setButtonShow] = useState(true)
  const [formData, setFormData] = useState(initialFormValue);
  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = React.useState(false);
  const [deleteUserID, setDeleteUserID] = useState('')

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("*user name is required "),
    password: Yup.string().required("*password is required"),
    address : Yup.string().required("*address is required"),
    Mobile : Yup.number().required("*mobile is required"),
  })

  useEffect(() => {
    dispatch(Action.getUser())
  }, [])

  useEffect(() => {
    if(isUserRegister){
      dispatch(Action.getUser())
    }
  }, [isUserRegister])

  // const handleFromInpit = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   setFormData({...formData, [name]: value })
  //   // setButtonShow(true)
  // }

  // function validate(){
  //   let msg = {};
  //   let isValid = false;
  //   if(taskAddEditForm.task_name == ''){
  //     isValid = true;
  //     msg.name = 'name is required'
  //   }
  //   if( selectedTaskFor == null ){
  //     isValid = true;
  //     msg.taskFore = 'task for required'
  //   }

  //   if( dueDate == '' ){
  //     isValid = true;
  //     msg.dueDate = 'dueDate is required'
  //   }
  //   if( selecedPriority == null){
  //     isValid = true;
  //     msg.priority = 'priority is required'
  //   }
  //   // console.log("msg ===",msg)
  //   if( taskAddEditForm.task_description == ''){
  //     isValid = true;
  //     msg.task_description = 'description is required'
  //   }
  //   return {isValid, msg};
  // }
  // validate()

  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   // this.setState({ value: this.state.input });
  //   dispatch(Action.employeeRegister(formData))
  // }
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
                <TableBody>
                    {(employee.length > 0) && employee.map((resData, key) => (
                        <TableRow  key={key}>
                        <TableCell align="right">{resData.username}</TableCell>
                        <TableCell align="right">{resData.address}</TableCell>
                        <TableCell align="right">{resData.Mobile}</TableCell>
                        <TableCell align="right">
                          
                          <OverlayTrigger overlay={<BTooltip>{'Edit'}</BTooltip>}>
                          <button
                            style={{background: 'none', border: 'none'}}
                            title='Edit Employee'
                            className="focus:outline-none" type="button"
                            onClick={() => {setFormData(resData)}}
                          ><CreateIcon /></button>
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
              <Formik
                  enableReinitialize={true}
                  initialValues={formData}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log("Form is validated! Submitting the form...", values);
                    dispatch(Action.userRegister(values))
                    dispatch(Action.isUserRegisterSuccess(false))
                  }}
              >  
              {({ 
                handleSubmit, 
                handleChange, 
                handleBlur,
                values,
                touched,
                errors, 
                isValid,
                dirty,
                validateForm,
                getFieldProps
            }) => (
                <form className="mt-5 shadow p-5" onSubmit={handleSubmit}>
                  <h3 className="flex justify-center mb-4">Register</h3>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Usser Name<span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            name="username" 
                            value={values.username} 
                            {...getFieldProps('username')}
                            onChange={handleChange} 
                            onBlur={()=>{
                              handleBlur({ target: { name:'username' } });
                            }}
                            className="form-control" 
                            id="username" 
                            placeholder="Enter Your Name" 
                            isInvalid={touched.username && errors.username}
                            isValid={touched.username && !errors.username}
                        />
                        {/* <ErrorMessage name="username" />   */}
                        <div className="text-danger" ><ErrorMessage name="username" /></div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password<span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input 
                            type="password" 
                            name="password" 
                            {...getFieldProps('password')}
                            value={values.password} 
                            onChange={handleChange} 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter Your Password" 
                            isInvalid={touched.password && errors.password}
                            isValid={touched.password && !errors.password}
                            />
                            <div className="text-danger" ><ErrorMessage name="password" /></div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">mobile no<span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input 
                            type="number" 
                            name="Mobile" 
                            value={values.mobile} 
                            onChange={handleChange} 
                            {...getFieldProps('Mobile')}
                            className="form-control" 
                            id="Mobile" 
                            placeholder="1234567891" 
                            isInvalid={touched.Mobile && errors.Mobile}
                            isValid={touched.Mobile && !errors.Mobile}
                            />
                            <div className="text-danger" ><ErrorMessage name="Mobile" /></div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Address<span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <textarea 
                            type="text" 
                            rows="5"
                            name="address" 
                            value={values.address} 
                            onChange={handleChange} 
                            className="form-control" 
                            id="address" 
                            placeholder="Write here ........" 
                            isInvalid={touched.address && errors.address}
                            isValid={touched.address && !errors.address}
                            />
                            {(errors.address) ? <div className="text-danger">{errors.address}</div> : null }
                    </div>
                  </div>
                  {buttonShow ? 
                  <div className="form-group row ">
                    <div className="col-sm-10 offset-sm-2 flex justify-center">
                      <OverlayTrigger overlay={<BTooltip>{'submit'}</BTooltip>}>
                      <button type="submit" disabled={!(isValid)} className="btn btn-success">Submit</button>
                      </OverlayTrigger>
                    </div>
                  </div>
                  : null }
                </form>
              )}
              </Formik>

              <DeleteConfirmDialog 
                    cofirmmessge="Delete this Employee?"
                    open={openDeleteConfirmDialog}
                    onClickDelete={()=>{
                        dispatch(Action.userDelete(deleteUserID))
                        setOpenDeleteConfirmDialog(false);
                    }}
                    onHide={() =>{ setOpenDeleteConfirmDialog(false) }} 
              />

      </React.Fragment>
  );
}

const mapStateToProps = ({user}) => ({
  employee: user.employee,
  isUserRegister: user.isUserRegister
})

export default connect(mapStateToProps)(MainDesh)




            {/* <p className="text-left">right aligned text on all viewport sizes.</p>
            <p className="text-sm-center">center aligned text on viewports sized SM (small) or wider.</p>
            <p className="text-md-right">right aligned text on viewports sized MD (medium) or wider.</p>
            <p className="text-lg-left">left aligned text on viewports sized LG (large) or wider.</p>
            <p className="text-xl-right">right aligned text on viewports sized XL (extra-large) or wider.</p>
            <div className="container">
              <div className="row no-gutters text-white">
                <div className="col-xl-4 col-md-3 col-sm-1 bg-primary">Flex item</div>
                <div className="col-xl-4 col-md-3 col-sm-1 bg-success">Flex item</div>
                <div className="col-xl-4 col-md-6 col-sm-1 bg-primary">Flex item</div>
              </div> */}