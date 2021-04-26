import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form'
import "./style/account.css";

class LoginForm extends Form {
    state = {
        data: { email: '', password: ''},
        errors: {}
    };

    schema = {
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
        
    }

    doSubmit = () => (
        //call the server
        console.log("Submitted")
    );

    render() { 
        

        return ( 

     

                <div className="container">
                    <h1>Sign In</h1> 
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('email', 'Email')}

                  {this.renderInput('password', 'Password', "password")}                  
                  {this.renderButton('Login')}   
      
                    </form>
                </div>
        
        );
    }
}
 
export default LoginForm;