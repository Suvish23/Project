import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  text: {
    padding: '15px',
    backgroundColor: 'black',
    listStyle: 'none',
    color: 'white',
    

  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.text}
      direction="row"
      justify="space-evenly"
 
    >
      <li>Products and Services</li>
      <li>Shop Smart</li>
      <li>Support</li>
      <li>Company</li>
    </Grid>
  );
};
export default Footer;
