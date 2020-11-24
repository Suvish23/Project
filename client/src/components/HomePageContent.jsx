import React from 'react';
import { makeStyles } from '@material-ui/styles';
import mobile from '../images/mobile.jpg';

const useStyles = makeStyles(() => ({
  image: {
    backgroundImage: `url(${mobile})`,
    minHeight: '84.2vh',
    minWidth: '5vw',
    backgroundPosition: 'center center',
    backgroundSize: '100vw',
  },
}));

const HomePageContent = () => {
  const classes = useStyles();
  return <div className={classes.image}></div>;
};
export default HomePageContent;
