import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {} from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const history = useHistory()

  const onclick = () => {
    history.push('/')
  }
  const onclickloginhandler = () => {
    history.push('/login')
  }
  const onclickcarthandler = () => {
    history.push('/cart')
  }
  const onclickgalleryhandler = () => {
    history.push('/gallery')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          <IconButton onClick={onclick}><h5 style={{ paddingLeft: '10px',color:'white', }}>Samsung</h5></IconButton>
        </Typography>
        <IconButton onClick={onclickgalleryhandler}><h5 style={{color:'whitesmoke'}}>Gallery</h5></IconButton>
        <IconButton onClick={onclickloginhandler} ><PersonIcon/></IconButton>
        <IconButton onClick={onclickcarthandler}>
        <ShoppingCartIcon /></IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
