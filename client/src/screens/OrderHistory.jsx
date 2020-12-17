import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from '../userContext';
import Card from '@material-ui/core/Card';
import { CardContent, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

export default function OrderHistory() {
  const { userstore } = useContext(UserContext);
  const [orders,setorders]=useState([])
  useEffect(()=>{
    axios
    .post('http://localhost:5000/orders',{
      userid:userstore.id
    })
    .then(res=>{
    setorders(res.data.data)
    }) 
  },[]);
    return (  
      <div>
        <div>
                <h1 style={{textAlign:"center"}}>Order History</h1>
              </div>
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
      </div>
  ); 
}


































