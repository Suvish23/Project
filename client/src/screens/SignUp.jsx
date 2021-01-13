import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { Card } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2"  align="center">
     
      <p style={{color:"black"}}> Copyright © <span style={{color:"black",fontWeight:"700",fontFamily:"Oswald"}}>SAMSUNG</span>   {new Date().getFullYear()}  {'.'}</p>
        
    
 
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
backgroundColor:"black",
height:"100vh"
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:"10px 10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginBottom: theme.spacing(3),
    backgroundColor:"black",
    color:"white",
    '&:hover':{
      backgroundColor:"black",
      color:"#ffffff",
    }
  },
}));
const SignUp = () => {

  const classes = useStyles();
  const history=useHistory();
  const { dispatch } = useContext(UserContext);
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/Register', {
    name:userName,
    email,
    password,
    phonenumber,
    })
    .then((response) => {
       dispatch({type:'addUser', payload:{name:response.data.data.name,id:response.data.data.userid}});
       history.push('/')
    })
    .catch((error) => {
      return error.response;
    });
  };
  return (
    <Grid container  className={classes.root}>
    <Container component="main" maxWidth="xs"  >
      <CssBaseline />
      <Card style={{padding:"2vh",borderRadius:"10px",padding:"10px 10px",marginTop:"30px"}}>
      <Grid className={classes.paper}>
       
        <Typography component="h1" variant="h5" style={{fontSize:"5rem",color:"#000000",fontFamily:"sans-serif",padding:"0"}}>
            <p style={{borderRadius:'10px',marginTop:"0"}}>Sign <span style={{color:"#ffffff",backgroundColor:'#000000'}}>in</span></p>
          </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="userName"
                value={userName}
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone Number"
                id="phonenumber"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => {
                  setPhonenumber(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type ="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={Submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <Link to ="/login" style={{textDecoration:"none",fontSize:"20px",fontFamily:" Big Shoulders Stencil Text"}}>Already have an account? <span style={{backgroundColor:"black",color:"white",borderRadius:"5px",fontSize:"20px"}}>Sign in </span> </Link>
            </Grid>
          </Grid>
        </form>
        
      </Grid>
      <Box>
      
        <Copyright />
      </Box>
      </Card>
    </Container>
    </Grid>
  );
};
export default SignUp;
