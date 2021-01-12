import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

function UpdateEmployee() {
    const [name,setName] = useState('');
  const [email,setEmail] = useState(''); 
  const [phonenumber,setPhonenumber] = useState(''); 
  const [role,setRole] = useState('');
  const [emp_name,setEmp_name] = useState('');
  const history = useHistory();
  const onclickaddemployeeHandler =() =>{
      axios.post("http://localhost:5000/addemployee",{
        name,
        email,
        phonenumber,
        role
      })
  .then((response) =>{
console.log(response.data)
  })
  .catch((error) =>{
      console.log(error)
  })
}
  const OnclickremoveemployeeHandler =() =>{
      axios.post("http://localhost:5000/remove",{
        name:emp_name,
      })
  .then((response) =>{
console.log(response.data)
  })
  .catch((error) =>{
      console.log(error)
  })
}
const onclickbackhandler = ()=>{
    history.push('/employees')
    }
    return (
        <Grid>
             <Grid item xs={12}>
            <AppBar position="static" style={{color:"black"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/></Button>
        </Toolbar>
      </AppBar>
            </Grid>
             <h1>Add Employees</h1>
        <Grid item xs={12}  style={{fontSize:"25px",paddingBottom:"20px"}}>NAME
        <TextField
          variant="outlined"
          required
          fullWidth
          id="name"
          label="Employee Name"
          name="emp_name"
          value={name}
          onChange={(e) => {
              setName(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={12}  style={{fontSize:"25px",paddingBottom:"20px"}}>Email
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => {
              setEmail(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={12}  style={{fontSize:"25px",paddingBottom:"20px"}}>PhoneNumber
        <TextField
          variant="outlined"
          required
          fullWidth
          id="phonenumber"
          label="Phonenumber"
          name="phonenumber"
          value={phonenumber}
          onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={12}  style={{fontSize:"25px",paddingBottom:"20px"}}>Role
        <TextField
          variant="outlined"
          required
          fullWidth
          id="role"
          label="Role"
          name="role"
          value={role}
          onChange={(e) => {
              setRole(e.target.value);
            }}
        />
      </Grid>
      <Button onClick={onclickaddemployeeHandler}>
          Submit
      </Button>
      <Grid >
          <h1>Delete Employees</h1>
      <Grid item xs={12}  style={{fontSize:"25px",paddingBottom:"20px"}}>EMPLOYEE NAME
        <TextField
          variant="outlined"
          required
          fullWidth
          id="employee name"
          label="employee name"
          name="employee name"
          value={emp_name}
          onChange={(e) => {
            setEmp_name(e.target.value);
            }}
        />
      </Grid>
      <Button onClick={OnclickremoveemployeeHandler}>
          Submit
      </Button>
      </Grid>
      </Grid>
    )
}

export default UpdateEmployee
