import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Items from './components/items';
import ItemForm from './components/itemForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Cart from './components/cart';
import Contact from './components/contact';
import Accounts from './components/accounts';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch> 
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/items/:id" component={ItemForm}></Route>
            <Route path="/items" component={Items}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/accounts" component={Accounts}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" exact to="/items" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;

