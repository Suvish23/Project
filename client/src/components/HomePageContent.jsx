// import React from 'react';
// import { makeStyles } from '@material-ui/styles';
// import mobile from '../images/mobile.jpg';

// const useStyles = makeStyles(() => ({
//   image: {
//     backgroundImage: `url(${mobile})`,
//     minHeight: '84.2vh',
//     minWidth: '5vw',
//     backgroundPosition: 'center center',
//     backgroundSize: '100vw',
//   },
// }));

// const HomePageContent = () => {
//   const classes = useStyles();
//   return <div className={classes.image}></div>;
// };
// export default HomePageContent;
import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { Grid } from '@material-ui/core';
import phone from '../images/phone.jpg';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';



const useStyles = makeStyles(() => ({
  root: {
    
    maxWidth:"25vw",
    minHeight:"4vh",
    margin:"6.2px"
  }, 
  icon: {
    width:"10vw",
    height:"6vh",
    paddingLeft:"9.8vw"
  },
  title:{
    fontSize:"20px",
    textAlign:"center",
    fontWeight:"700",
  },
  subtitle:{
    fontSize:"1rem",
    textAlign:"center",
    fontWeight:"400"
  },
  image: {
         backgroundImage: `url(${phone})`,
         minHeight: '83vh',
         minWidth: '100vw',
         backgroundPosition: 'center center',
         backgroundSize: '100vw',
        
       },
  }));
function HomePage() {
    const classes= useStyles();
    
    
    
    return (
  <Grid container>
          
         
          
          
          <div className={classes.image}> <h1 style={{color:"white",textAlign:"center",fontSize:"6rem",marginTop:"8vh",fontFamily:"fantasy"}}> DO SOMETHING  <br/><span style={{color:"#B6AFAF"}}> GREAT</span>  </h1></div>;
       
          
          
         
        </Grid>
        
        
    )
}

export default HomePage
