import { Card,CardContent, Grid,Typography, makeStyles, Button, TextField } from '@material-ui/core'
import Header from '../components/Header.jsx'
import React, {useState,useContext} from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../components/Footer.jsx';
import { UserContext } from '../userContext';
import axios from 'axios';


const useStyles = makeStyles(() => ({
  icon: {
    width:"10vw",
    height:"10vh",
    paddingLeft:"9.8vw",
    color:"black",
    marginLeft:"8px"
  },
  root: {
    minWidth:"32vw",
    maxWidth:"33vw",
    minHeight:"20vh",
    margin:"0px"
  }, 
  title:{
    fontSize:"20px",
    textAlign:"center",
    fontWeight:"700px",
    color:"black"
  },
  subtitle:{
    fontSize:"1rem",
    textAlign:"center",
    fontWeight:"400",
    color:"black"
  },
  button:{
    marginLeft:"10.5vw",
    '&:hover':{
      backgroundColor:"#EAEDED",
    }
  },
  button2:{
    marginLeft:"10.5vw",
    '&:hover':{
      backgroundColor:"#EB984E",
    }
  }
}));
export default function Contact() {
  const classes= useStyles();
  const { userstore } = useContext(UserContext);
  console.log(userstore)
  const [name,setName] = useState('');
const [email,setEmail] = useState(''); 
const [message,setMessage] = useState(''); 
const Submit = (e)=> {
    e.preventDefault();
   axios
   .post('http://localhost:5000/feedback', {
       name:name,
     email:email,
     message:message
     
   })
   .then((response) => {
      console.log(response.data)
   })
   .catch((error) => {
     window.alert("Incorrect Details");
   });
   };
  return(

    <Grid container>

      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid container xs={12} style={{marginTop:"45px"}} justify="center" >
          <Grid>
          <h1 style={{paddingLeft:"2px",paddingBottom:"20px" , fontSize:"38px"}}>
          <span  style={{color:"#ffffff"}} > CONTACT </span> US   </h1>        
                    
                  <Grid container justify="center">
                    <Grid item xs={12}  style={{fontSize:"25px",paddingBottom:"20px"}}>NAME
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="FULL NAME"
                name="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                  }}
              />
            </Grid>

                    <Grid item xs={12} style={{fontSize:"25px",paddingBottom:"20px"}}>EMAIL
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                  }}
              />
            </Grid>
                  
            <Grid item xs={12} style={{fontSize:"25px",paddingBottom:"20px"}}>MESSAGE
              <TextField
                variant="outlined"
                required
                fullWidth
                id="message"
                type="form"
                label="comments"
                name="message"
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                  }}
              />
            </Grid>
            </Grid>
                    <Grid container justify="center">
                      <Button
            type="submit"
            variant="contained"
            color="tan"
            style={{marginBottom:"60px",marginTop:"25px"}}
            onClick={Submit}
            disabled={!userstore.user || !name || !email || !message}
          >
            Submit
          </Button>
                    </Grid>
                   
          </Grid>
                    <Grid  container>
            <Grid xs={4}>
                <Card className={classes.root} style={{backgroundColor:"#EAEDED",paddingBottom:"1vh"}}>
                <CardContent>
                  <LocationOnIcon className={classes.icon}></LocationOnIcon>
                  <Typography className={classes.title} gutterBottom>
                    Location
                  </Typography>
                  
                  <Typography className={classes.subtitle}>
                    #69,1st Main,3rd Cross,MG Road,near Church Street,Bangalore-560032
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid xs={4}>
                <Card className={classes.root} style={{backgroundColor:"#EB984E",paddingBottom:"4vh"}}>
                <CardContent>
                  <LocalPhoneIcon  className={classes.icon}></LocalPhoneIcon>
                  <Typography className={classes.title}  gutterBottom>
         Phone Number
        </Typography>
                  
                  <Typography className={classes.subtitle} gutterBottom> 
                    (960074)-248765                
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid xs={4}>
                <Card className={classes.root} style={{backgroundColor:"#EAEDED",paddingBottom:"5vh"}}>
                <CardContent >
                  <EmailIcon className={classes.icon}></EmailIcon>
                  <Typography className={classes.title}  gutterBottom>
          Email
        </Typography>     
                  <Typography className={classes.subtitle}>
                  SamsungMobiles@gmail.com
                  </Typography>
                </CardContent> 
              </Card>
            </Grid>
          </Grid>                 
          </Grid>
          <Grid container>
            <Footer/>
          </Grid>
    </Grid>
  )
}