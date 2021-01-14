import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
  const history =useHistory();

  const onclickcontactushandler = () => {
    history.push('/Contact')
  }
  const onclickemployeehandler = () => {
    history.push('/employees')
  }
  const onclicktriggerushandler = () => {
    history.push('/triggers')
  }
  return (
    <Grid
      container
      className={classes.text}
      direction="row"
      justify="space-evenly"
 
    >
      
     
      <Button style={{color:'white'}} onClick={onclickemployeehandler}>Employee</Button>
      <Button style={{color:'white'}} onClick={onclickcontactushandler}>Contact Us</Button>
      <Button style={{color:'white'}} onClick={onclicktriggerushandler} >Trigger</Button>
        
      
    </Grid>
  );
};
export default Footer;
