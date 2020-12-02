import React,{useContext} from 'react'
import {UserContext} from '../userContext'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Footer from '../components/Footer';
import { Grid} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
      },
    footer: {
        direction: 'row',
        justify: 'center',
        alignContent: 'flex-end',
      },
      typographyStyles: {
        position: 'fixed',
        left: '43.5vw',
      },
  });



export default function Thankyou() {
    const classes = useStyles();
    const history = useHistory()
    const { userstore }= useContext(UserContext);
    const onclickbackhandler = (e) =>{
      e.preventDefault();
        history.push('/Gallery');
    }
    return (
        <Grid container direction="column" className={classes.root}>
        <Grid item >
    <AppBar position="static">
      <Toolbar>
          <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Gallary</h5></Button>

        <Typography className={classes.typographyStyles}>
            <h2>SAMSUNG</h2>
        </Typography>
      </Toolbar>
    </AppBar>
  </Grid>
        <Grid>
            <h2 style={{paddingLeft:'30vw',paddingTop:"10vh",fontSize:'40px'}}>Thank you for shopping {userstore.user}.....</h2>
        </Grid>
        <Grid item container className={classes.footer}>
            <Footer/>
        </Grid>
</Grid>
    )
}




































