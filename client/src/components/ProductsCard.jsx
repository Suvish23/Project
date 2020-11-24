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


const useStyles = makeStyles({
  root: {
    maxHeight: '600px',
    minWidth: 20,
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
  const { dispatch } = useContext(CartContext);
  
  const { id, title, subtitle, description, imgSrc } = props;
  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={subtitle} />
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
        <Button size="small" onClick={() => dispatch({
          type: 'addToCart',
          payload: {
            id: id,
            
          }
        })}>
          <ShoppingCartIcon />
          Add to Cart 
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductsCard;