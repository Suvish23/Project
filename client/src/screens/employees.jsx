import { Grid } from '@material-ui/core';
import React , {useEffect} from 'react'

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





function Employees() {
  const classes = useStyles();
  const [data,setData] = React.useState([]);
const history =useHistory();
  const onclickbackhandler = ()=>{
    history.push('/')
    }
  useEffect(() => {
    axios.get("http://localhost:5000/employees")
    .then(res=>{
      console.log(res.data.data)
      setData(res.data.data)
    }) 
    .catch(err=>{
      console.log(err)
    })  
 },[])
  

 
 

  return (
    <Grid container>
      <Grid item xs={12}>
            <AppBar position="static">
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
                <TableCell>Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell >Phonenumber</TableCell>
                <TableCell >Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
            <StyledTableRow>
              <StyledTableCell >{row.emp_name}</StyledTableCell>
              <StyledTableCell align="left">
               {row.emp_email}</StyledTableCell>
              <StyledTableCell align="left">
              {row.emp_phonenumber}</StyledTableCell>
              <StyledTableCell >{row.Role}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default Employees