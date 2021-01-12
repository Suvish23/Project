import { Grid } from '@material-ui/core';
import React from 'react';
import HomePageContent from '../components/HomePageContent';
import Header from '../components/Header';
import Footer from '../components/Footer';

//This is Home Page. Add all your components here

const Homepage = () => {
  return (
    <div>
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <HomePageContent />
      </Grid>
      <Grid container item xs={12} direction="row" justify="center" alignContent="flex-end"  style={{bottom:"0px",position:"absolute"}}>
        <Footer />
      </Grid>
    </div>
  );
};

export default Homepage;