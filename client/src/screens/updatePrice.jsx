import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState,useContext } from 'react'
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { UpdateContext } from '../UpdatePriceContext';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(()=>({
    button:{
        color:"black", 
        border:"1px solid black",
        marginBottom:"30px",
        "&:hover": {
          color:"white",
          backgroundColor: "black"
        },
      }
}))


function UpdatePrice() {
    const classes=useStyles();
    const {updatestore} = useContext(UpdateContext);
    const history = useHistory();
    console.log(updatestore.id)
    const [price,setPrice] = useState('');

    const onclicksubmit = (id) =>{
        console.log(id)
     axios.put(`http://localhost:5000/update/${id}`,{
     subtitle:price}
     )   
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
        // window.alert("Incorrect Details");
      });
    }
    const onclickbackhandler = () =>{
        history.push('/Gallery')
    }
    return (
        <Grid container>
       <Grid item xs={12}>
            <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Gallery</h5></Button>
        </Toolbar>
      </AppBar>
            </Grid>

            <Grid container justify="center">
        <Grid container  xs={7}  style={{fontSize:"25px",paddingBottom:"20px"}}>Price
        <TextField
          variant="outlined"
          required
          fullWidth
          id="price"
          label=" Enter New Price"
          name="price"
          value={price}
          onChange={(e) => {
              setPrice(e.target.value);
            }}
        />
      </Grid>
      </Grid>
      <Grid container justify="center">
      <Button onClick={()=>onclicksubmit(updatestore.id)} className={classes.button}>
          Submit
      </Button>
      </Grid>
      </Grid>
    )
}


export default UpdatePrice
