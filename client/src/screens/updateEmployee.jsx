import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(()=>({
  content:{
  //  paddingLeft:"25vw"
  justifyContent:"center"
  },
  button:{
    color:"black", 
    border:"1px solid black",
    marginBottom:"30px",
    "&:hover": {
      color:"white",
      backgroundColor: "black"
    },
  }
}));


function UpdateEmployee() {
  const classes=useStyles();
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
            <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/></Button>
        </Toolbar>
      </AppBar>
            </Grid>
             <h1 style={{padding:"20px",textAlign:"center"}}>Add Employees</h1>
          <Grid container  className={classes.content}>

         
        <Grid container xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>NAME
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
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>Email
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
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>PhoneNumber
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
        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>Role
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
      </Grid>
      <Grid container justify="center">
      <Button onClick={onclickaddemployeeHandler} className={classes.button} >
          
          Submit
            
      </Button>
      </Grid>
      <h1 style={{marginBottom:"10px",padding:"20px",textAlign:"center"}}>Delete Employees</h1>
      <Grid container justify="center" >
          
      <Grid item xs={7} style={{fontSize:"25px",paddingBottom:"20px",paddingLeft:"10px"}}>EMPLOYEE NAME
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
      <Grid container justify="center">
      <Button onClick={OnclickremoveemployeeHandler} className={classes.button} >
          
          Submit
            
      </Button>
      </Grid>
      </Grid>
      </Grid>
    )
}

export default UpdateEmployee
