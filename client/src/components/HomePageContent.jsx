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
    fontWeight:"700"
  },
  subtitle:{
    fontSize:"1rem",
    textAlign:"center",
    fontWeight:"400"
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
function HomePage() {
    const classes= useStyles();
    
    
    
    return (
  <Grid container>
          
          <h1 style={{textAlign:"center",width:"100%",margin:"auto",fontFamily:"sans-serif",backgroundColor:"#222",color:"#EB984E",padding:"12px 0",fontWeight:"200"}}>Mobiles</h1>
          
          <Grid item container>
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"#EB984E"}}>
                <CardContent>
                  <LocationOnIcon className={classes.icon}></LocationOnIcon>
                  <Typography className={classes.title} gutterBottom>
                     Great Location
                  </Typography>
                  
                  <Typography className={classes.subtitle}>
                    #69,1st Main,3rd Cross,MG Road,near Church Street,Bangalore-560032
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large"className={classes.button}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"#EAEDED"}}>
                <CardContent>
                  <FastfoodIcon  className={classes.icon}></FastfoodIcon>
                  <Typography className={classes.title}  gutterBottom>
         Free Meals
        </Typography>
                  
                  <Typography className={classes.subtitle}>
                    Free Meals for Breakfast,Lunch and Dinner included in the Package                   
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" className={classes.button2}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"#EB984E"}}>
                <CardContent>
                  <FitnessCenterIcon className={classes.icon}></FitnessCenterIcon>
                  <Typography className={classes.title}  gutterBottom>
          Fitness Studio
        </Typography>
                  
                  <Typography className={classes.subtitle}>
                    Well Equipped Fitness Room which is available 24/7 with Energy Drinks
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" className={classes.button}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
         
        </Grid>
        
        
    )
}

export default HomePage
