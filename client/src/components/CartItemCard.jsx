import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { CartContext } from '../CartContext';

const useStyles = makeStyles({
  root: {
    minWidth: '98%',
  },
  button:{
    color:"black", 
    border:"1px solid black",
   
    "&:hover": {
      color:"white",
      backgroundColor: "black"
    },
  }
});

function CartItemCard(props) {
  const classes = useStyles();
  const { dispatch } = useContext(CartContext);

  const removeItemHandler = (id) => {
    dispatch({ type: 'removeFromCart', payload: id });
  };

  return (
    <Card className={classes.root}>
      
      <CardContent direction="row">
        <Grid container direction="row" justify="space-between">
          <li>{props.title}</li>
  <li >{'₹'} {props.subtitle}</li>
  
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          className={classes.button}
          color="white"
          size="small"
          onClick={() => removeItemHandler(props.id)}
        >
          Remove {props.id}
        </Button>
      </CardActions>
    </Card>
  );
}
export default CartItemCard;
