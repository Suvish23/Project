import React, { useEffect, useState, useContext } from 'react';
import { CardContent, Grid} from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../CartContext';
import {UserContext} from '../userContext'
import { useHistory } from "react-router-dom";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
      },
    footer: {
        direction: 'row',
        justify: 'center',
        alignContent: 'flex-end',
      },
      typographyStyles: {
        position: 'fixed',
        left: '43.5vw',
      },
  });

export default function Order() {
    const classes = useStyles();
    const history = useHistory()
    const { cartstore }= useContext(CartContext);
    const { userstore }= useContext(UserContext);
    const storeid = cartstore.map(({ id }) => id);
    console.log(cartstore);
    console.log(userstore.id);
    const onclickbackhandler = (e) =>{
      e.preventDefault();
        history.push('/Cart');
    }
  const Placeorder = (e) =>{
    axios.post("http://localhost:5000/placeorder",{
      user_id:userstore.id,
      id:storeid
    })
    .then(res=>{
      console.log(res.data)
  })
  .catch(error=>{
    console.log('failed')
  })
  history.push('/Thankyou');
}
    const [CartItems, setItem] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/getProducts').then((res) => {
        console.log('Inside use effect', res.data);
        setItem(res.data.data);
      });
    }, []);
    

return (
    <Grid container direction="column" className={classes.root}>
    <Grid item >
    <AppBar position="static">
      <Toolbar>
          <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Cart</h5></Button>

        <Typography className={classes.typographyStyles}>
            <h2>YOUR ORDER</h2>
        </Typography>
        <Typography style={{flex:'end',position:'fixed',right:'2vw'}}>
<h2>{userstore.user}</h2>
        </Typography>
      </Toolbar>
    </AppBar>
  </Grid>
  <Grid style={{padding:"30px"}} container item  xs={12} sm={12} direction="column" justify="center" alignItems='stretch'   >
    <Card >
      <CardContent>
        <Grid item  >
{CartItems.filter((item) => storeid.includes(item.id)).map(
              (item) => {
                return (
                  <Grid container item direction='row' xs={12} sm={12} key={item.id}    >
                    <Card style={{padding:"15px 15px 45px 15px", borderBottom :"5px solid grey",width:'100%',margin:"10px" }}>
                    
                  <div style={{position:'absolute',left:'6vw'}}>
                  <h3>
                  {item.title}
                    </h3>
                  </div>
                  <div style={{position:'absolute',right:'6vw'}}>
                  <h3>
                  {"Rs "} {item.subtitle}
                    </h3>
                  </div>
                    </Card>
                  </Grid>
                );
              }
            )}
  </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{position:'relative',left:'43vw'}}
          onClick={Placeorder} 
        >
          Place order
        </Button>
      </CardActions>
    </Card>
    </Grid>

<Grid item container className={classes.footer}>
<Footer />
</Grid>
</Grid>
  );
  }





















































