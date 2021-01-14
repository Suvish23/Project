import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from '../userContext';
import Card from '@material-ui/core/Card';
import { CardContent, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { useHistory } from 'react-router-dom';

export default function OrderHistory() {
  const { userstore } = useContext(UserContext);
  const history=useHistory();
  const [orders,setorders]=useState([])
  console.log(userstore.id)
  useEffect(()=>{
    axios
    .post('http://localhost:5000/orders',{
      userid:userstore.id
    })
    .then(res=>{
    setorders(res.data.data)
    }) 
  },[]);
  console.log(orders)
  const onclickbackhandler = ()=>{
    history.push('/')
    }
    return (  
      <Grid>
        <Grid item xs={12}>
            <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Home</h5></Button>
        <h1 style={{textAlign:"center",marginLeft:"33vw"}}>Order History</h1>
        </Toolbar>
        
      </AppBar>
            </Grid>
       
              
             
        {
        orders.map((order) => {
          return (
            <Grid style={{padding:"30px"}} container item  xs={12} sm={12} direction="column" justify="center" alignItems='stretch' key={order.orderid}  >
              <Card>
                <Typography style={{padding:"20px",fontSize:'30px '}}>
          {'Orderid : '}{order.orderid}
                  </Typography>
                {order.producttitle.map(product => {
                  return(
                    <CardContent style={{padding:"15px",}}>
                  {product}
                </CardContent>
                  )
                })}
              </Card>
            </Grid>
          );
        })}
      </Grid>
  ); 
}


































