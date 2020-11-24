import React from 'react';
import samsung from '../images/samsung.jpg';
import { makeStyles } from '@material-ui/styles';
import '../App.css';

const useStyles = makeStyles(() => ({
  image: {
    backgroundImage: `url(${samsung})`,
    minHeight: '90vh',
    minWidth: '98.9vw',
    backgroundPosition: 'center',
    backgroundSize: '100vw',
  },
}));

const Gallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.image}>
      <h1 className="text"> SAMSUNG</h1>
    </div>
  );
};
export default Gallery;
