import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {useHistory} from "react-router-dom"
import { Grid, TextField } from '@material-ui/core';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button:{
    color:"black", 
    border:"1px solid black",
    margin:"30px",
    "&:hover": {
      color:"white",
      backgroundColor: "black"
    },
  }
}));

export default function Addproducts() {
  const classes = useStyles();
  const history = useHistory();
  const [title,setTitle] = useState('');
  const [imgsrc,setImgsrc] = useState(''); 
  const [subtitle,setSubtitle] = useState('');
  const [description,setDescription] = useState('');
const onclickbackhandler = ()=>{
history.push('/Gallery')
}
const onclickaddhandler = ()=>{
 axios.post("http://localhost:5000/createProduct",{
 title,
 subtitle,
 imgsrc,
 description,
})
.then((response) => {
  console.log(response.data)
})
.catch((error) => {
  return error.response;
});
}
  return (
  
        <Grid container  className={classes.root}>
            <Grid item xs={12}>
            <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Gallery</h5></Button>
        </Toolbar>
      </AppBar>
            </Grid>

      <Grid container justify ="center">
                    <Grid  xs={7} item   style={{fontSize:"25px",paddingBottom:"20px",marginTop:"20px"}}>TITLE
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                  }}
              />
            </Grid>

                    <Grid xs={7} item style={{fontSize:"25px",paddingBottom:"20px"}}>IMG SOURCE
              <TextField
                variant="outlined"
                required
                fullWidth
                id="imgsrc"
                label="Img Source"
                name="imgsrc"
                value={imgsrc}
                onChange={(e) => {
                    setImgsrc(e.target.value);
                  }}
              />
            </Grid>
                  
            <Grid xs={7} item style={{fontSize:"25px",paddingBottom:"20px"}}>PRICE
              <TextField
                variant="outlined"
                required
                fullWidth
                id="subtitle"
                type="form"
                label="Price"
                name="subtitle"
                value={subtitle}
                onChange={(e) => {
                    setSubtitle(e.target.value);
                  }}
              />
            </Grid>
            <Grid xs={7} item  style={{fontSize:"25px",paddingBottom:"20px"}}>DESCRIPTION
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                type="form"
                label="Description"
                name="description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                  }}
              />
            </Grid>
            </Grid>
            <Grid container justify="center">

            <Button onClick={onclickaddhandler} className={classes.button}  >Submit</Button>
            </Grid>
            
            </Grid>


  );
}
