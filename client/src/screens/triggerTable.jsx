import { Grid  } from '@material-ui/core';
import React , { useEffect  } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useHistory} from "react-router-dom"
import axios from 'axios';

import Footer from '../components/Footer';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





function Trigger() {
  const classes = useStyles();
 
  const [price,setPrice] = React.useState([]);
   
const history =useHistory();

  const onclickbackhandler = ()=>{
    history.push('/')
    }
  useEffect(() => {
    axios.get("http://localhost:5000/trigger")
    .then(res=>{
      console.log(res.data.data)
      setPrice(res.data.data)
    }) 
    .catch(err=>{
      console.log(err)
    })  
 },[])


  
  return (
    <Grid container>
      <Grid item xs={12}>
            <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Home</h5></Button>
        </Toolbar>
      </AppBar>
            </Grid>
      <Grid item container style={{marginTop:"20px"}}>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell>Product_id</TableCell>
                <TableCell >Product_name</TableCell>
                <TableCell > OLD Price</TableCell>
                <TableCell >New Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {price.map((row) => (
            <StyledTableRow>
              <StyledTableCell >{row.id}</StyledTableCell>
              <StyledTableCell align="left">
               {row.title}</StyledTableCell>
              <StyledTableCell align="left">
              {row.old_subtitle}</StyledTableCell>
              <StyledTableCell >{row.new_subtitle}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
      </Grid>
     

     
   <Grid container xs={12} direction="row" justify="center" alignContent="flex-end" style={{bottom:"0px",position:"absolute"}}>
     <Footer/>
   </Grid>
    </Grid>
  )
}

export default Trigger