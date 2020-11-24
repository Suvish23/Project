import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from '../src/screens/Cart';
import Login from '../src/screens/Login';
import SignUp from '../src/screens/SignUp';
import Homepage from '../src/screens/HomePage';
import ProductPstpage from '../src/screens/ProductPstPage';
import Thankyou from './screens/Thankyou';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/gallery" exact component={ProductPstpage} />
        <Route path="/login" exact component={Login} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/Thankyou" exact component={Thankyou} />
      </Switch>
    </Router>
      
  );
}

export default App;
