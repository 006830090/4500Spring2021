import React from 'react';
import logoURL from './images/logo.jpeg';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light  topNav">
        
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logoURL} 
              width="60" height="40" to="/" class="d-inline-block align-text-top">
            </img>
          </Link>
          
          <div >
            <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                
                <NavLink className="nav-link" to="/items">
                  Items
                </NavLink>
                
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
                
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
                
                <NavLink className="nav-link" to="/accounts">
                  Accounts
                </NavLink>

                <NavLink className="nav-link" to="/login">
                  Log In
                </NavLink>


                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              
              </div>
            </div>
          </div>

        </div>
      </nav>


    ); //end return

};//endnav bar






export default NavBar;