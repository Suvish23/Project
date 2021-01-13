import React, {useContext,useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import loginpage from '../images/loginpage.jpg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link
} from 'react-router-dom';

import {UserContext} from '../userContext'
import { useHistory } from "react-router-dom";
import axios from 'axios'

function Copyright() {
  return (
    <Typography color="textprimary" align="center">
      Copyright © 
      <Link color="primary" to='/' style={{fontFamily:'sans-serif',color:"#000000",fontWeight:"700",textDecoration:"none",fontFamily:"Oswald"}}>
        SAMSUNG
      </Link>{'  '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${loginpage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '767px',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
    outlineColor:"000000",
    border:'#000000',
  },
  submit: {
    margin: theme.spacing(3, 0, 2), //spacing(top,rightleft,bottom)
    color:"#ffffff",
    backgroundColor:"#000000",
    fontSize:"1.2rem",
    '&:hover':{
      backgroundColor:"#D6D4D4",
      color:"#000000",
      cursor:"pointer",
    }
  },
  input:{
    width:"100%",
    fontSize:'1.2rem',
    padding:"10px 0",
    margin:"10px 0",
    textAlign:'center',

  },
  label:{
    fontSize:"1rem",
    fontFamily:'sans-serif',
    textAlign:'center',
  }
}));

 export function Login() {
  const classes = useStyles();
  const history=useHistory();
  const [email,setEmail] = useState('');
const [password,setPassword] = useState(''); 
const { dispatch } = useContext(UserContext);
const Submit = (e)=> {
  e.preventDefault();
 axios
 .post('http://localhost:5000/Login', {
   email:email,
   password:password
 })
 .then((response) => {
   console.log(response.id)
  dispatch({type:'addUser', payload:{name:response.data.name,id:response.data.id}});
  history.push('/')
 })
 .catch((error) => {
   window.alert("Incorrect Details");
 });
 };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
          <Typography component="h1" variant="h5" style={{fontSize:"5rem",color:"#000000",fontFamily:"sans-serif",padding:"0"}}>
            <p style={{borderRadius:'10px',marginBottom:"20px"}}>Sign <span style={{color:"#ffffff",backgroundColor:'#000000'}}>in</span></p>
          </Typography>
          <form className={classes.form} noValidate>
            <label  className={classes.label}>EMAIL ADDRESS</label>
            <input
             className={classes.input}
              id="email"
              placeholder="welcometosamsung@gmail.com"
              label="Email Address"
              type="email"
              name="email"
              value={email}
               onChange={(e) => {
                 setEmail(e.target.value);
               }}
            />
            <label  className={classes.label}>PASSWORD</label>
            <input
               className={classes.input}
              name="password"
              value={password}
              label="Password"
              type="password"
              id="password"
              placeholder="*****"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"

color="primary"
              className={classes.submit}
              onClick={Submit}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid container>
               <Link to='/SignUp' style={{marginLeft:"12vw",fontSize:"18px",textDecoration:"none",fontFamily:" Big Shoulders Stencil Text"}}>Don't have an account? <span style={{backgroundColor:"#000000",color:"#ffffff",borderRadius:"6px",marginLeft:"5px",padding:"0 5px"}}>Sign Up</span></Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default Login;