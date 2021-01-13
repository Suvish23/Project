import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../CartContext';
import { UserContext } from '../userContext';


import { useHistory } from 'react-router-dom';
import { UpdateContext } from '../UpdatePriceContext';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    maxHeight: '600px',
    minWidth: 20,
    borderRadius:"18px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ProductsCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useContext(CartContext);
  const { dispatch2 } = useContext(UpdateContext);
  const {userstore} = useContext(UserContext);
  const { id, title, subtitle, description, imgSrc } = props;

  const Onclickupdatehandler = (id) =>{ 
    
    dispatch2({type:'addtostore', payload:{id}});
    history.push('/updateprice')
   
  }
  const Onclickdeletehandler = (id) =>{ 
    
    
    axios.delete(`http://localhost:5000/remove/${id}`)
    history.push('/')
    
   
  }
  return (
    <Card className={classes.root}>
      <CardHeader title={title} />
  <Typography style={{paddingLeft:'2vw',paddingBottom:'2vh'}}>{'₹'} {subtitle}</Typography>
      <CardMedia style={{ height: '34vh' }} image={imgSrc} />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h8" component="h9">
          <li>{description}</li>
        </Typography>
        <Typography className={classes.pos} color="textSecondary"></Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
      <CardActions>
        { (userstore.user !=="admin") &&
        <Button size="small" onClick={() => dispatch({
          type: 'addToCart',
          payload: {
            id: id,
            subtitle:subtitle,
            title:title   
          }
        })}>
          <ShoppingCartIcon />
          Add to Cart 
        </Button>}
        {
    (userstore.user==="admin") &&  <Button onClick={()=>Onclickupdatehandler(id)}>update</Button>
  }
        {
    (userstore.user==="admin") &&  <Button onClick={()=>Onclickdeletehandler(id)}>delete</Button>
  }
      </CardActions>
    </Card>
  );
};
export default ProductsCard;