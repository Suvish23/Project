import { Grid } from '@material-ui/core';
import React from 'react';

import GalleryProducts from '../components/GalleryProducts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPstPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      {/* <Grid container xs={12} sm={12}>
        <Gallery />
      </Grid> */}
      <Grid className="sky" item container>
        <Grid item xs={false} sm={1} />
        
        <Grid xs={12} sm={10}>
          <GalleryProducts />
        </Grid>
       
        <Grid item xs={false} sm={1} />
      </Grid>
      <Grid container item xs={12} direction="row" justify="center" alignContent="flex-end"  style={{bottom:"0px",position:"relative"}}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ProductPstPage;
