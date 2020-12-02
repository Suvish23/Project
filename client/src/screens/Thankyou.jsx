import React,{useContext} from 'react'
import {UserContext} from '../userContext'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  });



export default function Thankyou() {
    const classes = useStyles();
    const { userstore }= useContext(UserContext);
    return (
        <Grid container direction="column" className={classes.root}>
        <Grid>
          <Header/>  
        </Grid>
        <Grid>
            <h2 style={{paddingLeft:'35vw',fontSize:'40px'}}>Thank you for shopping {userstore.user}.....</h2>
        </Grid>
        <Grid item container className={classes.footer}>
            <Footer/>
        </Grid>
</Grid>
    )
}




































