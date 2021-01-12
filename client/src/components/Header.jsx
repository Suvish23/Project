import React,{useContext} from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {} from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { UserContext } from '../userContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../images/logo.jpg';






const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  button:{
    marginLeft:"2vw",
    color:"#ffffff",
    '&:hover':{
      backgroundColor:"#ffffff",
      color:"#000000",
      borderRadius:"8px"
    }
  },
  button2:{
    color:"#ffffff",
    padding:"8px",
    '&:hover':{
      backgroundColor:"#ffffff",
      color:"#000000",
    }
  },
}));
const Header = () => {
  const { userstore } = useContext(UserContext);
  console.log(userstore)
  const { dispatch } = useContext(UserContext);

  const classes = useStyles();
  const history = useHistory();

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
  const onclicklogouthandler = ()=>{
  dispatch({type :'logout',payload:{name:userstore.name}})
  window.alert("Logged out successfully")
    history.push('/')
  }
  const Onclicknamehandler = (e) =>{
    e.preventDefault();
    if(userstore.user !=="admin"){
    history.push('/OrderHistory')
    }
  }
const OnclickAddhandler = (e) =>{
  e.preventDefault();
history.push("/addproducts")
}
 
  console.log(userstore.id)
  return (
    <AppBar position="static" style={{backgroundColor:"black"}}>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          <Button onClick={onclick} style={{ width:"10vw",height:"5vh",color:'white',backgroundImage: `url(${logo})`,backgroundPosition: 'center center'}}></Button>
        </Typography>
  {
    (userstore.user==="admin") &&  <Button onClick={OnclickAddhandler} className={classes.button2} >Add products</Button>
  }
 
        <Button onClick={onclickgalleryhandler} color="inherit" className={classes.button}>Gallery</Button>
  <Button onClick={Onclicknamehandler} className={classes.button2} disabled={!userstore.user }>{userstore.user}</Button>
        <IconButton onClick={onclickloginhandler} className={classes.button2}  ><PersonIcon/></IconButton>
        <IconButton onClick={onclickcarthandler} className={classes.button2}>
        <ShoppingCartIcon /></IconButton>
        <IconButton onClick={onclicklogouthandler} className={classes.button2} ><ExitToAppIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
