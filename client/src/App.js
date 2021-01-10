import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from '../src/screens/Cart';
import Login from '../src/screens/Login';
import SignUp from '../src/screens/SignUp';
import Homepage from '../src/screens/HomePage';
import ProductPstpage from '../src/screens/ProductPstPage';
import Order from './screens/Order';
import Thankyou from './screens/Thankyou';
import OrderHistory from './screens/OrderHistory';
import Contact from './screens/Contact';
import Employees from './screens/employees';
import Addproducts from './screens/addProducts';
import UpdatePrice from './screens/updatePrice';
import UpdateEmployee from './screens/updateEmployee'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/gallery" exact component={ProductPstpage} />
        <Route path="/login" exact component={Login} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/Order" exact component={Order} />
        <Route path="/Thankyou" exact component={Thankyou} />
        <Route path="/OrderHistory" exact component={OrderHistory} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/employees" exact component={Employees} />
        <Route path="/addproducts" exact component={Addproducts} />
        <Route path="/updateprice" exact component={UpdatePrice} />
        <Route path="/updateemployee" exact component={UpdateEmployee} />
      </Switch>
    </Router>
      
  );
}

export default App;
