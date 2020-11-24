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
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </div>
  );
};

export default Homepage;