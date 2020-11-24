import { Grid } from '@material-ui/core';
import React from 'react';
import Gallery from '../components/Gallery';
import GalleryProducts from '../components/GalleryProducts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPstPage = () => {
  return (
    <div>
      <Grid item>
        <Header />
      </Grid>
      <Grid container xs={12} sm={12}>
        <Gallery />
      </Grid>
      <Grid className="sky" item container>
        <Grid item xs={false} sm={1} />
        
        <Grid xs={12} sm={10}>
          <GalleryProducts />
        </Grid>
       
        <Grid item xs={false} sm={1} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </div>
  );
};

export default ProductPstPage;
